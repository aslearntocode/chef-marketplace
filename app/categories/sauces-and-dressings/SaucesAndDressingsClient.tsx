import { products } from '@/data/whole-foods';
import CategoryPage from '../../whole-foods/components/CategoryPage';

export default function SaucesAndDressingsClient() {
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