import { MetadataRoute } from 'next'
import { products } from '@/data/whole-foods'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thedivinehands.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/chef-application`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Category pages
  const categories = [
    'healthier-treats',
    'healthier-beverages', 
    'healthier-bites',
    'pickles-chutneys',
    'healthier-breakfast',
    'spice-blends',
    'nuts-and-seeds',
    'healthier-cakes',
    'healthier-premixes',
    'sauces-and-dressings',
    'mouth-fresheners',
    'drinks'
  ]

  const categoryPages = categories.map(category => ({
    url: `${baseUrl}/categories/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Product pages
  const productPages = products.map(product => ({
    url: `${baseUrl}/categories/${product.category.toLowerCase().replace(/\s+/g, '-')}/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...categoryPages, ...productPages]
}
