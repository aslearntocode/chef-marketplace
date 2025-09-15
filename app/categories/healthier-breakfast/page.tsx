import { Metadata } from 'next';
import { products } from '@/data/whole-foods';
import CategoryPage from '../../whole-foods/components/CategoryPage';
import { generateCategoryMetaData } from '@/lib/metaUtils';

export const metadata: Metadata = generateCategoryMetaData(
  'Healthier Breakfast',
  'healthier-breakfast',
  'Start your day with our nutritious breakfast options. Healthy, wholesome, and delicious morning meals made with natural ingredients.',
  '/images/placeholder.png'
);

export default function HealthierBreakfastPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'healthier breakfast'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Healthier Breakfast" 
        products={categoryProducts} 
        basePath="/categories/healthier-breakfast"
      />
    </main>
  );
}