'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiChevronRight } from 'react-icons/fi';

interface BreadcrumbProps {
  customPaths?: {
    [key: string]: string;
  };
}

export default function Breadcrumb({ customPaths = {} }: BreadcrumbProps) {
  const pathname = usePathname() || '';
  const rawSegments = pathname.split('/').filter(Boolean);

  // Default path names and category mappings
  const defaultPathNames: { [key: string]: string } = {
    'whole-foods': 'Whole Foods',
    'healthy-treats': 'Healthy Treats',
    'drinks': 'Drinks',
    'healthy-bites': 'Healthy Bites',
    'pickles': 'Pickles & Condiments',
    'healthy-breakfast': 'Healthy Breakfast'
  };

  // Build breadcrumb items
  const breadcrumbItems = [];

  // Always add Whole Foods as first item if in whole-foods section
  if (rawSegments[0] === 'whole-foods') {
    breadcrumbItems.push({
      href: '/whole-foods',
      displayName: 'Whole Foods',
      key: 'whole-foods-0'
    });

    // Handle category pages
    if (rawSegments.includes('categories')) {
      const categorySlug = rawSegments[rawSegments.length - 1];
      // Add category breadcrumb if it exists in our mappings
      if (categorySlug in defaultPathNames) {
        breadcrumbItems.push({
          href: `/whole-foods/categories/${categorySlug}`,
          displayName: defaultPathNames[categorySlug],
          key: `${categorySlug}-1`
        });
      }
    }
    // Handle product pages
    else if (rawSegments.length > 1) {
      const productSlug = rawSegments[rawSegments.length - 1];
      const productCategory = customPaths['category'];
      
      if (productCategory && defaultPathNames[productCategory]) {
        // Add the category breadcrumb
        breadcrumbItems.push({
          href: `/whole-foods/categories/${productCategory}`,
          displayName: defaultPathNames[productCategory],
          key: `${productCategory}-1`
        });

        // Add the product breadcrumb
        breadcrumbItems.push({
          href: pathname,
          displayName: customPaths[productSlug] || productSlug.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' '),
          key: `${productSlug}-2`
        });
      }
    }
  }

  return (
    <nav className="flex items-center space-x-2 text-base text-gray-600 py-2 px-4 md:px-6 overflow-x-auto whitespace-nowrap">
      <Link href="/" className="hover:text-gray-900">
        Home
      </Link>
      {breadcrumbItems.map((item, index) => (
        <div key={item.key} className="flex items-center">
          <FiChevronRight className="mx-2 text-gray-400" size={18} />
          {index === breadcrumbItems.length - 1 ? (
            <span className="text-gray-900 font-medium">{item.displayName}</span>
          ) : (
            <Link href={item.href} className="hover:text-gray-900">
              {item.displayName}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
} 