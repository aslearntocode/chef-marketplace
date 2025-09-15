'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Category {
  id: string;
  name: string;
  description: string;
  href: string;
  image: string;
}

interface CategoriesPageClientProps {
  categories: Category[];
}

export default function CategoriesPageClient({ categories }: CategoriesPageClientProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FDBE28] pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-4">
          <h1 className="text-xl md:text-3xl font-bold text-gray-900 whitespace-nowrap font-itc-souvenir">Food Categories</h1>
          
          {/* Search Bar - Floating Design */}
          <div className="w-full md:max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 rounded-full border-2 border-[#FDBE28] focus:outline-none focus:ring-2 focus:ring-[#FDBE28] focus:border-transparent bg-white text-sm shadow-sm font-itc-souvenir"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-[#FDBE28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCategories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
                <div className="w-full h-40 md:h-48 relative overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 group-hover:text-[#FDBE28] transition-colors font-itc-souvenir">
                  {category.name}
                </h3>
                <p className="text-xs md:text-sm leading-relaxed font-itc-souvenir mb-2 text-gray-600">
                  {category.description}
                </p>
                <div className="mt-3 flex items-center text-[#FDBE28] font-semibold text-xs md:text-sm font-itc-souvenir">
                  Explore
                  <svg className="ml-1 w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-8">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2 font-itc-souvenir">
              No categories found
            </h3>
            <p className="text-gray-600 font-itc-souvenir">
              Try adjusting your search terms
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
