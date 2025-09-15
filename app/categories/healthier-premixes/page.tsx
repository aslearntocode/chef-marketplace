import { Metadata } from 'next';
import { products } from '@/data/whole-foods';
import CategoryPage from '../../whole-foods/components/CategoryPage';
import { generateCategoryMetaData } from '@/lib/metaUtils';

export const metadata: Metadata = generateCategoryMetaData(
  'Healthier Premixes',
  'healthier-premixes',
  'Convenient premixes for quick and healthy meals. Easy-to-make, nutritious options for busy lifestyles.',
  '/images/placeholder.png'
);

export default function HealthierPremixesPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'healthier premixes'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Healthier Premixes" 
        products={categoryProducts} 
        basePath="/categories/healthier-premixes"
      />
    </main>
  );
}