import { products } from '@/data/whole-foods';
import CategoryPage from '../../components/CategoryPage';

export default function SaucesAndDressingsClient() {
  const categoryProducts = products.filter(product =>
    product.category.toLowerCase() === 'sauces and dressings'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage
        category="Sauces and Dressings"
        products={categoryProducts}
      />
    </main>
  );
} 