'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { tiffinServices } from '@/data/tiffin-services';
import { toast } from 'react-hot-toast';
import { useCart } from '@/context/CartContext';
import type { MenuItem } from '@/types/menu';
import { getAuth } from 'firebase/auth';

export default function TiffinServicePage() {
  const params = useParams();
  const tiffinId = params?.id ? Number(params.id) : null;
  const tiffin = tiffinId ? tiffinServices.find(t => t.id === tiffinId) : undefined;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { addToCart } = useCart();
  const router = useRouter();
  const auth = getAuth();

  if (!tiffin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Tiffin service not found</p>
      </div>
    );
  }

  // Function to get menu items based on selected category
  const getMenuItems = () => {
    if (selectedCategory === 'all') {
      return Object.entries(tiffin.menu).map(([category, items]) => ({
        category,
        items: items || []
      }));
    }
    return [{
      category: selectedCategory,
      items: tiffin.menu[selectedCategory] || []
    }];
  };

  const handleAddToCart = (item: MenuItem) => {
    if (!auth.currentUser) {
      const currentPath = window.location.pathname;
      router.push(`/login?returnUrl=${encodeURIComponent(currentPath)}`);
      return;
    }

    const itemPrice = typeof item.price === 'string' 
      ? Number(item.price.replace(/[^\d.]/g, ''))
      : item.price;

    addToCart({
      id: `${tiffin.id}-${item.name.replace(/\s+/g, '-')}`,
      name: item.name,
      price: itemPrice,
      chefId: tiffin.id,
      chefName: tiffin.name,
      description: item.description,
      category: item.category
    });

    toast.success(`${item.name} added to cart`);
  };

  return (
    <main>
      <div className="h-[72px]" />

      {/* Tiffin Service Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex gap-6">
            <div className="flex items-center gap-6">
              <div className="relative w-32 h-32">
                <Image
                  src={tiffin.image}
                  alt={tiffin.name}
                  fill
                  className="object-cover rounded-full border-2 border-gray-100 shadow-md"
                  sizes="(max-width: 768px) 128px, 128px"
                  priority
                />
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl font-bold">{tiffin.name}</h1>
                  <span className="flex items-center bg-green-50 text-green-800 px-2 py-1 rounded-full text-sm">
                    ⭐ {tiffin.rating}
                  </span>
                </div>
                <p className="text-gray-600 mb-1">{tiffin.specialty}</p>
                <p className="text-gray-500 text-sm flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {tiffin.location}
                </p>
              </div>
            </div>

            {tiffin.description && (
              <div className="flex-1 border-l border-gray-100 pl-6 flex items-center">
                <p className="text-gray-600 text-sm leading-relaxed italic">{tiffin.description}</p>
              </div>
            )}
          </div>

          {/* Notes Section */}
          {tiffin.notes && tiffin.notes.length > 0 && (
            <div className="mt-6">
              <div className="flex flex-wrap gap-2">
                {tiffin.notes.map((note, index) => (
                  <span 
                    key={index}
                    className="bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-sm border border-amber-100"
                  >
                    {note.replace('*', '•')}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Menu Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Tabs */}
        <div className="flex overflow-x-auto gap-4 mb-8 pb-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            View All
          </button>
          {Object.keys(tiffin.menu).map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="space-y-8">
          {getMenuItems().map(({ category, items }) => (
            <div key={category}>
              {selectedCategory === 'all' && (
                <h2 className="text-2xl font-bold mb-4">{category}</h2>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items && items.map(item => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">₹{item.price}</span>
                      <button 
                        onClick={() => handleAddToCart(item)}
                        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link
          href="/home-made-food/tiffin"
          className="text-gray-600 hover:text-black flex items-center gap-2"
        >
          ← Back to Tiffin Services
        </Link>
      </div>
    </main>
  );
} 