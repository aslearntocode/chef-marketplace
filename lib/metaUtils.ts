import { Metadata } from 'next';

export interface MetaDataProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: 'website' | 'article';
  category?: string;
}

export function generateMetaData({
  title,
  description,
  url,
  image = '/images/TDH Logo.png',
  type = 'website',
  category
}: MetaDataProps): Metadata {
  const fullTitle = title.includes('The Divine Hands') ? title : `${title} | The Divine Hands`;
  
  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'The Divine Hands',
      images: [
        {
          url: image,
          width: 800,
          height: 600,
          alt: title,
        },
      ],
      locale: 'en_IN',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
    ...(category && {
      keywords: [
        'healthy food',
        'natural food',
        'chemical-free products',
        'Mumbai food delivery',
        'wholesome food',
        'organic food',
        'Indian food products',
        category.toLowerCase(),
        'The Divine Hands'
      ],
    }),
  };
}

export function generateProductMetaData(product: any, categoryPath: string): Metadata {
  const productUrl = `https://thedivinehands.com/categories/${categoryPath}/${product.id}`;
  const productImage = product.images?.[0] || product.image || '/images/placeholder.png';
  
  return generateMetaData({
    title: product.name,
    description: product.description || `Discover ${product.name} - a wholesome, chemical-free ${product.category?.toLowerCase() || 'food product'} from The Divine Hands.`,
    url: productUrl,
    image: productImage,
    type: 'website',
    category: product.category
  });
}

export function generateCategoryMetaData(categoryName: string, categoryPath: string, description: string, image?: string): Metadata {
  const categoryUrl = `https://thedivinehands.com/categories/${categoryPath}`;
  
  return generateMetaData({
    title: categoryName,
    description,
    url: categoryUrl,
    image: image || '/images/TDH Logo.png',
    type: 'website',
    category: categoryName
  });
}
