# Product Ratings System

This document explains how to set up and use the new product ratings system that allows users to rate individual products instead of just orders.

## Setup Instructions

### 1. Database Migration

Run the following SQL commands in your Supabase SQL editor:

```sql
-- Create product_ratings table
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

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_product_ratings_product_id ON product_ratings(product_id);
CREATE INDEX IF NOT EXISTS idx_product_ratings_user_id ON product_ratings(user_id);

-- Create helper functions
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
```

### 2. Files Added/Modified

- **`database_migration_product_ratings.sql`** - Database migration file
- **`utils/productRatings.ts`** - Utility functions for handling product ratings
- **`components/ProductRating.tsx`** - Reusable rating component
- **`app/orders/page.tsx`** - Updated to show individual product ratings
- **`app/whole-foods/[id]/ProductPageClient.tsx`** - Added product rating display

## How It Works

### Rating Storage
- Ratings are stored per product, per user, per order
- Each user can only rate a product once per order
- Ratings range from 1-5 stars

### Rating Display
- **Product Pages**: Show average rating and total number of ratings
- **Orders Page**: Allow users to rate products they've ordered
- **Rating Breakdown**: Visual representation of rating distribution

### Rating Input
- Users can only rate products they've actually ordered
- Rating input is shown on the orders page for each product
- Users can update their ratings

## Usage Examples

### 1. Display Product Rating (Read-only)
```tsx
<ProductRating 
  productId="product-123"
  showRatingInput={false}
/>
```

### 2. Display Product Rating with Input (for users who ordered)
```tsx
<ProductRating 
  productId="product-123"
  orderId="order-456"
  showRatingInput={true}
/>
```

### 3. Get Rating Statistics Programmatically
```tsx
import { getProductRatingStats } from '@/utils/productRatings';

const stats = await getProductRatingStats('product-123');
console.log(`Average: ${stats.averageRating}, Total: ${stats.totalRatings}`);
```

## Features

- **Real-time Updates**: Ratings update immediately after submission
- **Rating Breakdown**: Visual representation of 1-5 star distribution
- **User-specific Ratings**: Users can see their own ratings
- **Performance Optimized**: Uses database indexes and efficient queries
- **Responsive Design**: Works on all device sizes
- **Error Handling**: Graceful fallbacks for failed operations

## Database Schema

### product_ratings Table
- `id`: Unique identifier (UUID)
- `product_id`: Product identifier
- `user_id`: User identifier (Firebase UID)
- `order_id`: Order identifier
- `rating`: Rating value (1-5)
- `review_text`: Optional review text
- `created_at`: Timestamp of rating

### Constraints
- Unique combination of product_id, user_id, and order_id
- Rating must be between 1 and 5
- All fields are required except review_text

## Migration from Order-level Ratings

The old system stored ratings at the order level. The new system:
- Stores ratings per product
- Provides more granular feedback
- Allows better product comparison
- Maintains backward compatibility

## Troubleshooting

### Common Issues

1. **"Error fetching product ratings"**
   - Check if the product_ratings table exists
   - Verify Supabase connection
   - Check browser console for detailed errors

2. **Ratings not showing up**
   - Ensure the product_id matches exactly
   - Check if there are any ratings in the database
   - Verify the ProductRating component is properly imported

3. **Rating input not appearing**
   - Ensure showRatingInput={true}
   - Check if user is authenticated
   - Verify orderId is provided

### Debug Mode

Enable console logging by checking the browser console for:
- Rating fetch operations
- User authentication status
- Database query results
- Error messages

## Future Enhancements

- **Review Text**: Allow users to write detailed reviews
- **Rating Moderation**: Admin tools to manage inappropriate ratings
- **Rating Analytics**: Dashboard for vendors to track product performance
- **Rating Notifications**: Notify vendors when they receive new ratings
- **Rating Verification**: Ensure ratings come from verified purchases
