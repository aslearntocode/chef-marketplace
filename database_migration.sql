-- Migration to remove delivery_slot and add name column to orders table
-- Run this in your Supabase SQL editor

-- Step 1: Add the name column to the delivery_address JSONB
-- Note: This will add the name field to the delivery_address JSON structure
-- Existing orders will have null for the name field

-- Step 2: Remove the delivery_slot column from the orders table
ALTER TABLE orders DROP COLUMN IF EXISTS delivery_slot;

-- Step 3: Update existing orders to have a default name in delivery_address
-- This is optional but recommended for data consistency
UPDATE orders 
SET delivery_address = delivery_address || '{"name": "Customer"}'::jsonb
WHERE delivery_address->>'name' IS NULL;

-- Step 4: Add a constraint to ensure name is always present in delivery_address
-- This is optional but recommended for data integrity
ALTER TABLE orders 
ADD CONSTRAINT check_delivery_address_name 
CHECK (delivery_address->>'name' IS NOT NULL AND delivery_address->>'name' != ''); 