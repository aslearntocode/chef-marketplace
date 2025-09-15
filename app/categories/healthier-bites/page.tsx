import { Metadata } from 'next';
import { products } from '@/data/whole-foods';
import CategoryPage from '../../whole-foods/components/CategoryPage';
import { generateCategoryMetaData } from '@/lib/metaUtils';

export const metadata: Metadata = generateCategoryMetaData(
  'Healthier Bites',
  'healthier-bites',
  'Explore our range of healthier bites - perfect snacks for any time of the day. Made with natural ingredients and no artificial preservatives.',
  '/images/milletcookies/can/DSC03949.jpg'
);

export default function HealthierBitesPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'healthy bites'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Healthier Bites" 
        products={categoryProducts} 
        basePath="/categories/healthier-bites"
      />
    </main>
  );
}