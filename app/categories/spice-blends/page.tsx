import { Metadata } from 'next';
import { products } from '@/data/whole-foods';
import CategoryPage from '../../whole-foods/components/CategoryPage';
import { generateCategoryMetaData } from '@/lib/metaUtils';

export const metadata: Metadata = generateCategoryMetaData(
  'Spice Blends',
  'spice-blends',
  'Discover our premium collection of handcrafted spice blends. Pure and authentic Indian spices to elevate your culinary creations.',
  '/images/placeholder.png'
);

export default function SpiceBlendsPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'spice blends'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Spice Blends" 
        products={categoryProducts} 
        basePath="/categories/spice-blends"
      />
    </main>
  );
}