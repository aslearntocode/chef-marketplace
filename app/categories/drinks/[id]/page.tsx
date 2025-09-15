import { Metadata } from 'next';
import { products } from '@/data/whole-foods';
import { Product } from '@/types/whole-foods';
import ProductPageClient from './ProductPageClient';
import { generateProductMetaData } from '@/lib/metaUtils';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find(p => p.id === id);

  if (!product) {
    return {
      title: 'Product Not Found | The Divine Hands',
      description: 'The requested product could not be found.',
    };
  }

  return generateProductMetaData(product, 'drinks');
}

export default function ProductPage({ params }: ProductPageProps) {
  return <ProductPageClient params={params} />;
}