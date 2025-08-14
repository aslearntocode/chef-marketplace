import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export interface ProductRating {
  id: string;
  product_id: string;
  user_id: string;
  order_id: string;
  rating: number;
  review_text?: string;
  created_at: string;
}

export interface ProductRatingStats {
  averageRating: number;
  totalRatings: number;
  ratingBreakdown: {
    [key: number]: number;
  };
}

// Function to extract base product ID from cart item ID
// Cart item IDs are formatted as: "productId-size-flavor"
export const getBaseProductIdFromCartItem = (cartItemId: string): string => {
  // Split by hyphens and take the first part as the base product ID
  const parts = cartItemId.split('-');
  
  // Common variant indicators that should be removed
  const variantIndicators = [
    'broken', 'split', 'small', 'medium', 'large', 'jumbo',
    'regular', 'premium', 'organic', 'natural', 'traditional',
    'mild', 'spicy', 'sweet', 'sour', 'chocolate', 'vanilla',
    'strawberry', 'mint', 'lemon', 'orange', 'apple'
  ];
  
  // If the last parts match variant indicators, remove them
  let baseId = parts[0];
  for (let i = 1; i < parts.length; i++) {
    if (variantIndicators.includes(parts[i].toLowerCase())) {
      break;
    }
    baseId += '-' + parts[i];
  }
  
  return baseId;
};

// Function to get all possible cart item IDs for a base product
export const getAllCartItemIdsForProduct = (baseProductId: string): string[] => {
  // Import products data dynamically to avoid circular dependencies
  // This will be populated when the function is first called
  if (!(getAllCartItemIdsForProduct as any).productCache) {
    try {
      // Dynamic import to avoid build-time issues
      import('@/data/whole-foods').then(({ products }) => {
        (getAllCartItemIdsForProduct as any).productCache = products;
      });
    } catch (error) {
      console.warn('Could not load products data:', error);
    }
  }

  const products = (getAllCartItemIdsForProduct as any).productCache || [];
  
  // Find the product and generate all possible variant IDs
  const product = products.find((p: any) => p.id === baseProductId);
  if (!product || !product.variants || !product.variants.sizes) {
    return [baseProductId];
  }

  // Generate all possible cart item IDs for this product
  const variantIds: string[] = [];
  
  // Add the base product ID
  variantIds.push(baseProductId);
  
  // Add all size variants
  if (product.variants.sizes) {
    product.variants.sizes.forEach((size: any) => {
      variantIds.push(`${baseProductId}-${size.value.toLowerCase()}`);
    });
  }
  
  // Add all flavor variants (if they exist)
  if (product.variants.flavors) {
    product.variants.flavors.forEach((flavor: any) => {
      variantIds.push(`${baseProductId}-${flavor.value.toLowerCase()}`);
    });
  }

  console.log(`Generated variant IDs for ${baseProductId}:`, variantIds);
  return variantIds;
};

export const submitProductRating = async (
  cartItemId: string, // This is the cart item ID (includes variant info)
  orderId: string,
  userId: string,
  rating: number,
  reviewText?: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    const supabase = createClientComponentClient();
    
    // Extract base product ID from cart item ID
    const baseProductId = getBaseProductIdFromCartItem(cartItemId);
    
    console.log('Submitting rating:', {
      cartItemId,
      baseProductId,
      userId,
      orderId,
      rating
    });
    
    // First, check if a rating already exists for this user, product, and order
    const { data: existingRating, error: checkError } = await supabase
      .from('product_ratings')
      .select('id, rating')
      .eq('product_id', baseProductId)
      .eq('user_id', userId)
      .eq('order_id', orderId)
      .single();

    if (checkError && checkError.code !== 'PGRST116') { // PGRST116 = no rows returned
      console.error('Error checking existing rating:', checkError);
      return { success: false, error: checkError.message };
    }

    if (existingRating) {
      // Update existing rating
      const { error: updateError } = await supabase
        .from('product_ratings')
        .update({
          rating,
          review_text: reviewText,
          created_at: new Date().toISOString()
        })
        .eq('id', existingRating.id);

      if (updateError) {
        console.error('Error updating existing rating:', updateError);
        return { success: false, error: updateError.message };
      }
    } else {
      // Create new rating
      const { error: insertError } = await supabase
        .from('product_ratings')
        .insert({
          product_id: baseProductId,
          user_id: userId,
          order_id: orderId,
          rating,
          review_text: reviewText
        });

      if (insertError) {
        console.error('Error creating new rating:', insertError);
        return { success: false, error: insertError.message };
      }
    }

    return { success: true };
  } catch (error) {
    console.error('Error submitting product rating:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
};

export const getProductRatingStats = async (
  productId: string // This is the base product ID
): Promise<ProductRatingStats> => {
  try {
    const supabase = createClientComponentClient();
    
    console.log('Fetching rating stats for productId:', productId);
    
    // Get all possible cart item IDs for this base product
    const cartItemIds = getAllCartItemIdsForProduct(productId);
    console.log('Cart item IDs for this product:', cartItemIds);
    
    // First, let's check what's actually in the database for this product
    const { data: allRatingsInDb, error: allError } = await supabase
      .from('product_ratings')
      .select('*');
    
    if (allError) {
      console.error('Error fetching all ratings:', allError);
    } else {
      console.log('All ratings in database:', allRatingsInDb);
    }
    
    // Fetch ratings for the base product ID (since we store ratings with base IDs)
    const { data, error } = await supabase
      .from('product_ratings')
      .select('rating')
      .eq('product_id', productId);

    // Also check for ratings stored with variant IDs (for backward compatibility)
    const { data: variantRatings, error: variantError } = await supabase
      .from('product_ratings')
      .select('rating')
      .in('product_id', cartItemIds);
    
    if (variantError) {
      console.error('Error fetching variant ratings:', variantError);
    } else {
      console.log('Variant ratings found:', variantRatings);
    }

    if (error) {
      console.error('Error fetching product ratings:', error);
      return {
        averageRating: 0,
        totalRatings: 0,
        ratingBreakdown: {}
      };
    }

    console.log('Raw rating data returned:', data);

    // Combine base product ratings and variant ratings
    let allRatings: number[] = [];
    
    if (data && data.length > 0) {
      allRatings = allRatings.concat(data.map(r => r.rating));
    }
    
    if (variantRatings && variantRatings.length > 0) {
      allRatings = allRatings.concat(variantRatings.map(r => r.rating));
    }

    if (allRatings.length === 0) {
      console.log('No ratings found for product or variants:', productId);
      return {
        averageRating: 0,
        totalRatings: 0,
        ratingBreakdown: {}
      };
    }

    const ratings = data.map(r => r.rating);
    const totalRatings = ratings.length;
    const averageRating = ratings.reduce((sum, rating) => sum + rating, 0) / totalRatings;
    
    // Calculate rating breakdown
    const ratingBreakdown: { [key: number]: number } = {};
    for (let i = 1; i <= 5; i++) {
      ratingBreakdown[i] = ratings.filter(r => r === i).length;
    }

    return {
      averageRating: Math.round(averageRating * 10) / 10, // Round to 1 decimal place
      totalRatings,
      ratingBreakdown
    };
  } catch (error) {
    console.error('Error fetching product rating stats:', error);
    return {
      averageRating: 0,
      totalRatings: 0,
      ratingBreakdown: {}
    };
  }
};

export const getUserProductRating = async (
  cartItemId: string, // This is the cart item ID (includes variant info)
  userId: string,
  orderId: string
): Promise<number | null> => {
  try {
    const supabase = createClientComponentClient();
    
    // Extract base product ID from cart item ID
    const baseProductId = getBaseProductIdFromCartItem(cartItemId);
    
    // Look for rating by base product ID, user ID, and order ID
    const { data, error } = await supabase
      .from('product_ratings')
      .select('rating')
      .eq('product_id', baseProductId) // Look up by base product ID
      .eq('user_id', userId)
      .eq('order_id', orderId)
      .single();

    if (error) {
      // If no rating found, return null (this is expected for new ratings)
      if (error.code === 'PGRST116') {
        return null;
      }
      console.error('Error fetching user product rating:', error);
      return null;
    }

    return data?.rating || null;
  } catch (error) {
    console.error('Error fetching user product rating:', error);
    return null;
  }
};
