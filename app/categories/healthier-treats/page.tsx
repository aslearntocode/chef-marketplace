import { Metadata } from 'next';
import { products } from '@/data/whole-foods';
import CategoryPage from '../../whole-foods/components/CategoryPage';
import { generateCategoryMetaData } from '@/lib/metaUtils';

export const metadata: Metadata = generateCategoryMetaData(
  'Healthier Treats',
  'healthier-treats',
  'Discover our collection of healthier treats - delicious and nutritious snacks made with natural ingredients. No preservatives, no artificial chemicals, just pure goodness.',
  '/images/dateandnutbites/NNs_80.jpg'
);

export default function HealthyTreatsPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'healthy treats'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Healthier Treats" 
        products={categoryProducts} 
        basePath="/categories/healthier-treats"
      />
    </main>
  );
} 