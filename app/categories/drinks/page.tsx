import { Metadata } from 'next';
import { products } from '@/data/whole-foods';
import CategoryPage from '../../whole-foods/components/CategoryPage';
import { generateCategoryMetaData } from '@/lib/metaUtils';

export const metadata: Metadata = generateCategoryMetaData(
  'Drinks',
  'drinks',
  'Refreshing and healthy drinks made with natural ingredients. Perfect for staying hydrated and healthy.',
  '/images/images-drinks/Paan-e-bahar/amazon-06.jpg'
);

export default function DrinksPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'drinks'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Drinks" 
        products={categoryProducts} 
        basePath="/categories/drinks"
      />
    </main>
  );
}