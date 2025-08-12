import { Metadata } from 'next';
import { accessories } from '@/data/accessories';
import { Product } from '@/types/whole-foods';
import AccessoryProductPageClient from './AccessoryProductPageClient';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = accessories.find(p => p.id === id);

  if (!product) {
    return {
      title: 'Product Not Found | The Divine Hands',
      description: 'The requested product could not be found.',
    };
  }

  const productUrl = `https://thedivinehands.com/cooking-accessories/${id}`;
  const productImage = product.images?.[0] || product.image || '/images/placeholder.png';

  return {
    title: `${product.name} | The Divine Hands`,
    description: product.description || `Discover ${product.name} - a quality cooking accessory from The Divine Hands.`,
    openGraph: {
      title: `${product.name} | The Divine Hands`,
      description: product.description || `Discover ${product.name} - a quality cooking accessory from The Divine Hands.`,
      url: productUrl,
      siteName: 'The Divine Hands',
      images: [
        {
          url: productImage,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
      locale: 'en_IN',
      type: 'product',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | The Divine Hands`,
      description: product.description || `Discover ${product.name} - a quality cooking accessory from The Divine Hands.`,
      images: [productImage],
    },
    alternates: {
      canonical: productUrl,
    },
  };
}

export default function AccessoryProductPage({ params }: ProductPageProps) {
  return <AccessoryProductPageClient params={params} />;
} 