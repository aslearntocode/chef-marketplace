import { Metadata } from 'next';
import { products } from '@/data/whole-foods';
import CategoryPage from '../../whole-foods/components/CategoryPage';
import { generateCategoryMetaData } from '@/lib/metaUtils';

export const metadata: Metadata = generateCategoryMetaData(
  'Mouth Fresheners',
  'mouth-fresheners',
  'Natural mouth fresheners for fresh breath. Traditional Indian mouth fresheners made with natural ingredients.',
  '/images/placeholder.png'
);

export default function MouthFreshenersPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'mouth fresheners'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Mouth Fresheners" 
        products={categoryProducts} 
        basePath="/categories/mouth-fresheners"
      />
    </main>
  );
}