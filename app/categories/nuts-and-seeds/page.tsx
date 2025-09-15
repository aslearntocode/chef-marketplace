import { Metadata } from 'next';
import { products } from '@/data/whole-foods';
import CategoryPage from '../../whole-foods/components/CategoryPage';
import { generateCategoryMetaData } from '@/lib/metaUtils';

export const metadata: Metadata = generateCategoryMetaData(
  'Nuts & Nut Butters',
  'nuts-and-seeds',
  'Premium quality nuts, dry fruits and nut butters. Nutrient-rich snacks that are perfect for healthy snacking and cooking.',
  '/images/placeholder.png'
);

export default function NutsandSeedsPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'nuts & nut butters'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Nuts & Nut Butters" 
        products={categoryProducts} 
        basePath="/categories/nuts-and-seeds"
      />
    </main>
  );
}