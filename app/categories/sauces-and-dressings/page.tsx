import { Metadata } from 'next';
import { products } from '@/data/whole-foods';
import CategoryPage from '../../whole-foods/components/CategoryPage';
import { generateCategoryMetaData } from '@/lib/metaUtils';

export const metadata: Metadata = generateCategoryMetaData(
  'Sauces and Dressings',
  'sauces-and-dressings',
  'Flavorful sauces and dressings for your meals. Made with natural ingredients to enhance your culinary experience.',
  '/images/placeholder.png'
);

export default function SaucesandDressingsPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'sauces and dressings'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Sauces and Dressings" 
        products={categoryProducts} 
        basePath="/categories/sauces-and-dressings"
      />
    </main>
  );
}