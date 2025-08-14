-- Migration to update existing ratings to use base product IDs instead of cart item IDs
-- This ensures that ratings are aggregated across product variants

-- Step 1: Drop the unique constraint temporarily to allow updates
ALTER TABLE product_ratings DROP CONSTRAINT IF EXISTS product_ratings_product_id_user_id_order_id_key;

-- Step 2: Create a temporary table to store the mapping of cart item IDs to base product IDs
CREATE TEMP TABLE temp_rating_mapping AS
SELECT 
  id,
  product_id as cart_item_id,
  user_id,
  order_id,
  rating,
  review_text,
  created_at,
  -- Extract base product ID from cart item ID
  CASE 
    WHEN product_id LIKE '%-broken' THEN SPLIT_PART(product_id, '-', 1)
    WHEN product_id LIKE '%-split' THEN SPLIT_PART(product_id, '-', 1)
    WHEN product_id LIKE '%-small' THEN SPLIT_PART(product_id, '-', 1)
    WHEN product_id LIKE '%-medium' THEN SPLIT_PART(product_id, '-', 1)
    WHEN product_id LIKE '%-large' THEN SPLIT_PART(product_id, '-', 1)
    WHEN product_id LIKE '%-jumbo' THEN SPLIT_PART(product_id, '-', 1)
    ELSE product_id
  END as base_product_id
FROM product_ratings;

-- Step 2: Update existing ratings to use base product IDs
UPDATE product_ratings 
SET product_id = temp.base_product_id
FROM temp_rating_mapping temp
WHERE product_ratings.id = temp.id;

-- Step 3: Clean up duplicate ratings (same user, same base product, same order)
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

-- Step 4: Verify the changes
SELECT 
  product_id,
  COUNT(*) as rating_count,
  AVG(rating) as avg_rating
FROM product_ratings 
GROUP BY product_id 
ORDER BY rating_count DESC;

-- Step 5: Recreate the unique constraint
ALTER TABLE product_ratings 
ADD CONSTRAINT product_ratings_product_id_user_id_order_id_key 
UNIQUE (product_id, user_id, order_id);

-- Step 6: Drop temporary table
DROP TABLE temp_rating_mapping;
