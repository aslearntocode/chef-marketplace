import { Metadata } from 'next';
import { products } from '@/data/whole-foods';
import CategoryPage from '../../whole-foods/components/CategoryPage';
import { generateCategoryMetaData } from '@/lib/metaUtils';

export const metadata: Metadata = generateCategoryMetaData(
  'Pickles & Chutneys',
  'pickles-chutneys',
  'Discover our traditional pickles and flavorful condiments. Made with natural ingredients and traditional recipes passed down through generations.',
  '/images/placeholder.png'
);

export default function PicklesChutneysPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'condiments'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Pickles & Chutneys" 
        products={categoryProducts} 
        basePath="/categories/pickles-chutneys"
      />
    </main>
  );
}