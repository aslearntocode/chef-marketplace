export const calculateAverageRating = (ratings: number[]): string => {
  if (!ratings || ratings.length === 0) return 'New';
  
  const validRatings = ratings.filter(r => r > 0);
  if (validRatings.length === 0) return 'New';
  
  const average = validRatings.reduce((a, b) => a + b, 0) / validRatings.length;
  return average.toFixed(1);
}; 