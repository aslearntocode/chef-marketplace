import { Metadata } from 'next';
import { products } from '@/data/whole-foods';
import CategoryPage from '../../whole-foods/components/CategoryPage';
import { generateCategoryMetaData } from '@/lib/metaUtils';

export const metadata: Metadata = generateCategoryMetaData(
  'Healthier Cakes',
  'healthier-cakes',
  'Delicious cakes made with wholesome ingredients. Indulge in guilt-free desserts that are both tasty and nutritious.',
  '/images/placeholder.png'
);

export default function HealthierCakesPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'healthier cakes'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Healthier Cakes" 
        products={categoryProducts} 
        basePath="/categories/healthier-cakes"
      />
    </main>
  );
}