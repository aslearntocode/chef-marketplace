-- Scalable Migration for Product Variant Ratings
-- This migration automatically detects and converts ANY product variants to base product IDs

-- Step 1: Drop the unique constraint temporarily
ALTER TABLE product_ratings DROP CONSTRAINT IF EXISTS product_ratings_product_id_user_id_order_id_key;

-- Step 2: Create a function to extract base product ID from any variant ID
CREATE OR REPLACE FUNCTION extract_base_product_id(variant_id TEXT)
RETURNS TEXT AS $$
DECLARE
  parts TEXT[];
  base_id TEXT;
  i INTEGER;
  variant_indicators TEXT[] := ARRAY[
    'broken', 'split', 'small', 'medium', 'large', 'jumbo',
    'regular', 'premium', 'organic', 'natural', 'traditional',
    'mild', 'spicy', 'sweet', 'sour', 'chocolate', 'vanilla',
    'strawberry', 'mint', 'lemon', 'orange', 'apple',
    'extra', 'light', 'dark', 'white', 'black', 'red', 'green',
    'blue', 'yellow', 'pink', 'purple', 'brown', 'gray'
  ];
BEGIN
  -- Split by hyphens
  parts := string_to_array(variant_id, '-');
  base_id := parts[1];
  
  -- Check each part to see if it's a variant indicator
  FOR i IN 2..array_length(parts, 1) LOOP
    IF parts[i] = ANY(variant_indicators) THEN
      -- Found a variant indicator, stop here
      EXIT;
    ELSE
      -- Not a variant indicator, keep building the base ID
      base_id := base_id || '-' || parts[i];
    END IF;
  END LOOP;
  
  RETURN base_id;
END;
$$ LANGUAGE plpgsql;

-- Step 3: Create a temporary table with the mapping
CREATE TEMP TABLE temp_variant_mapping AS
SELECT 
  id,
  product_id as original_product_id,
  user_id,
  order_id,
  rating,
  review_text,
  created_at,
  extract_base_product_id(product_id) as base_product_id
FROM product_ratings;

-- Step 4: Show what will be changed
SELECT 
  original_product_id,
  base_product_id,
  COUNT(*) as rating_count
FROM temp_variant_mapping
WHERE original_product_id != base_product_id
GROUP BY original_product_id, base_product_id
ORDER BY rating_count DESC;

-- Step 5: Update all ratings to use base product IDs
UPDATE product_ratings 
SET product_id = temp.base_product_id
FROM temp_variant_mapping temp
WHERE product_ratings.id = temp.id;

-- Step 6: Clean up duplicate ratings (same user, same base product, same order)
-- Keep only the first rating for each combination
DELETE FROM product_ratings 
WHERE id IN (
  SELECT id FROM (
    SELECT id,
           ROW_NUMBER() OVER (
             PARTITION BY product_id, user_id, order_id 
             ORDER BY created_at
           ) as rn
    FROM product_ratings
  ) t
  WHERE t.rn > 1
);

-- Step 7: Recreate the unique constraint
ALTER TABLE product_ratings 
ADD CONSTRAINT product_ratings_product_id_user_id_order_id_key 
UNIQUE (product_id, user_id, order_id);

-- Step 8: Verify the changes
SELECT 
  product_id,
  COUNT(*) as rating_count,
  AVG(rating) as avg_rating
FROM product_ratings 
GROUP BY product_id 
ORDER BY rating_count DESC;

-- Step 9: Clean up
DROP TABLE temp_variant_mapping;
DROP FUNCTION extract_base_product_id(TEXT);

-- Step 10: Show final state
SELECT 
  'Migration completed successfully!' as status,
  COUNT(*) as total_ratings,
  COUNT(DISTINCT product_id) as unique_products
FROM product_ratings;
