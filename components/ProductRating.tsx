'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { getProductRatingStats, getUserProductRating, submitProductRating, getBaseProductIdFromCartItem } from '@/utils/productRatings';

interface ProductRatingProps {
  productId: string;
  orderId?: string; // Optional: if user has ordered this product
  showRatingInput?: boolean; // Whether to show rating input for users who ordered
  showDetailedBreakdown?: boolean; // Whether to show detailed rating breakdown
  className?: string;
}

export default function ProductRating({ 
  productId, 
  orderId, 
  showRatingInput = false,
  showDetailedBreakdown = false,
  className = '' 
}: ProductRatingProps) {
  const { user } = useAuth();
  const [ratingStats, setRatingStats] = useState({
    averageRating: 0,
    totalRatings: 0,
    ratingBreakdown: {} as { [key: number]: number }
  });
  const [userRating, setUserRating] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Determine if this is a cart item ID or base product ID
  const isCartItemId = productId.includes('-') && (
    productId.includes('-broken') || 
    productId.includes('-split') || 
    productId.includes('-small') || 
    productId.includes('-medium') || 
    productId.includes('-large') || 
    productId.includes('-jumbo')
  );

  // Get the base product ID for rating operations
  const baseProductId = isCartItemId ? getBaseProductIdFromCartItem(productId) : productId;

  console.log('ProductRating component debug:', {
    productId,
    isCartItemId,
    baseProductId,
    orderId
  });

  useEffect(() => {
    const fetchRatingStats = async () => {
      setIsLoading(true);
      try {
        const stats = await getProductRatingStats(baseProductId);
        setRatingStats(stats);
      } catch (error) {
        console.error('Error fetching rating stats:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRatingStats();
  }, [baseProductId]);

  useEffect(() => {
    const fetchUserRating = async () => {
      if (user?.uid && orderId) {
        try {
          const rating = await getUserProductRating(productId, user.uid, orderId);
          setUserRating(rating);
        } catch (error) {
          console.error('Error fetching user rating:', error);
        }
      }
    };

    fetchUserRating();
  }, [productId, user?.uid, orderId]);

  const handleRatingSubmit = async (rating: number) => {
    if (!user?.uid || !orderId) return;

    setIsSubmitting(true);
    try {
      const result = await submitProductRating(productId, orderId, user.uid, rating);
      if (result.success) {
        setUserRating(rating);
        // Refresh rating stats using the base product ID
        const stats = await getProductRatingStats(baseProductId);
        setRatingStats(stats);
      } else {
        console.error('Failed to submit rating:', result.error);
      }
    } catch (error) {
      console.error('Error submitting rating:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (rating: number, interactive = false, onStarClick?: (star: number) => void) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type={interactive ? 'button' : undefined}
            onClick={interactive && onStarClick ? () => onStarClick(star) : undefined}
            disabled={!interactive || isSubmitting}
            className={`text-lg md:text-xl transition-colors ${
              interactive 
                ? 'cursor-pointer hover:scale-110' 
                : 'cursor-default'
            } ${
              star <= rating
                ? 'text-yellow-400'
                : 'text-gray-300'
            }`}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="animate-pulse bg-gray-200 h-6 w-24 rounded"></div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {/* Rating Display */}
      <div className="flex items-center gap-2">
        {renderStars(ratingStats.averageRating)}
        <div className="flex items-center gap-1">
          <span className="text-xs md:text-sm font-semibold text-gray-900">
            {ratingStats.averageRating > 0 ? ratingStats.averageRating : 'No ratings'}
          </span>
          {ratingStats.totalRatings > 0 && (
            <span className="text-[10px] md:text-xs text-gray-500">
              ({ratingStats.totalRatings})
            </span>
          )}
        </div>
      </div>

      {/* Rating Breakdown - Only show on individual product pages */}
      {showDetailedBreakdown && ratingStats.totalRatings > 0 && (
        <div className="text-sm text-gray-600">
          {[5, 4, 3, 2, 1].map((star) => {
            const count = ratingStats.ratingBreakdown[star] || 0;
            const percentage = ratingStats.totalRatings > 0 ? (count / ratingStats.totalRatings) * 100 : 0;
            return (
              <div key={star} className="flex items-center gap-2">
                <span>{star}★</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-yellow-400 h-2 rounded-full" 
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="w-8 text-right">{count}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* User Rating Input */}
      {showRatingInput && user?.uid && orderId && (
        <div className="border-t pt-3">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-700">
              {userRating ? 'Your rating:' : 'Rate this product:'}
            </span>
            {renderStars(userRating || 0, true, handleRatingSubmit)}
            {userRating && (
              <span className="text-sm text-gray-500">
                ({userRating} stars)
              </span>
            )}
          </div>
          {isSubmitting && (
            <span className="text-sm text-gray-500">Saving...</span>
          )}
        </div>
      )}
    </div>
  );
}
