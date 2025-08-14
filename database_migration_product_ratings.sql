-- Migration to add product ratings functionality
-- Run this in your Supabase SQL editor

-- Step 1: Create a product_ratings table to store individual product ratings
CREATE TABLE IF NOT EXISTS product_ratings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id VARCHAR NOT NULL,
  user_id VARCHAR NOT NULL,
  order_id VARCHAR NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(product_id, user_id, order_id)
);

-- Step 2: Create an index for faster queries
CREATE INDEX IF NOT EXISTS idx_product_ratings_product_id ON product_ratings(product_id);
CREATE INDEX IF NOT EXISTS idx_product_ratings_user_id ON product_ratings(user_id);

-- Step 3: Add a function to calculate average product rating
CREATE OR REPLACE FUNCTION get_product_average_rating(product_id_param VARCHAR)
RETURNS DECIMAL AS $$
BEGIN
  RETURN (
    SELECT COALESCE(AVG(rating), 0)
    FROM product_ratings
    WHERE product_id = product_id_param
  );
END;
$$ LANGUAGE plpgsql;

-- Step 4: Add a function to get product rating count
CREATE OR REPLACE FUNCTION get_product_rating_count(product_id_param VARCHAR)
RETURNS INTEGER AS $$
BEGIN
  RETURN (
    SELECT COALESCE(COUNT(*), 0)
    FROM product_ratings
    WHERE product_id = product_id_param
  );
END;
$$ LANGUAGE plpgsql;
