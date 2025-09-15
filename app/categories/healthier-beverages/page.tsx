import { Metadata } from 'next';
import { products } from '@/data/whole-foods';
import CategoryPage from '../../whole-foods/components/CategoryPage';
import { generateCategoryMetaData } from '@/lib/metaUtils';

export const metadata: Metadata = generateCategoryMetaData(
  'Healthier Beverages',
  'healthier-beverages',
  'Discover our collection of healthier beverages - refreshing drinks made with natural ingredients. No preservatives, no artificial chemicals, just pure refreshment.',
  '/images/images-drinks/Paan-e-bahar/amazon-06.jpg'
);

export default function HealthierBeveragesPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'healthier beverages'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Healthier Beverages" 
        products={categoryProducts} 
        basePath="/categories/healthier-beverages"
      />
    </main>
  );
}