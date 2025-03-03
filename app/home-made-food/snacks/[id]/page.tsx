'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { snacksChefs } from '@/data/snacks';
import { toast } from 'react-hot-toast';
import { useCart } from '@/context/CartContext';
import { getAuth } from 'firebase/auth';

export default function SnackChefPage() {
  const params = useParams();
  const chefId = params?.id ? Number(params.id) : null;
  const chef = chefId ? snacksChefs.find(c => c.id === chefId) : undefined;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { addToCart } = useCart();
  const router = useRouter();
  const auth = getAuth();

  if (!chef) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Chef not found</p>
      </div>
    );
  }

  const categories = ['all', ...Object.keys(chef.menu)];

  const filteredMenu = selectedCategory === 'all'
    ? Object.entries(chef.menu).map(([category, items]) => ({ category, items }))
    : [{ category: selectedCategory, items: chef.menu[selectedCategory] || [] }];

  const handleAddToCart = (item: { id: number; name: string; price: number; description: string }) => {
    if (!auth.currentUser) {
      const currentPath = window.location.pathname;
      router.push(`/login?returnUrl=${encodeURIComponent(currentPath)}`);
      return;
    }

    addToCart({
      id: `${chef.id}-${item.name.replace(/\s+/g, '-')}`,
      name: item.name,
      price: item.price,
      chefId: chef.id,
      chefName: chef.name,
      category: selectedCategory
    });

    toast.success(`${item.name} added to cart`);
  };

  return (
    <main>
      <div className="h-[72px]" />

      {/* Chef Info Section */}
      <section className="bg-white border-b w-full">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center gap-6">
            <div className="relative w-32 h-32">
              <Image
                src={chef.image}
                alt={chef.name}
                fill
                className="object-cover rounded-full border-2 border-gray-100 shadow-md"
                sizes="(max-width: 768px) 128px, 128px"
                priority
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold">{chef.name}</h1>
                <span className="flex items-center bg-green-50 text-green-800 px-2 py-1 rounded-full text-sm">
                  ⭐ {chef.rating}
                </span>
              </div>
              <p className="text-gray-600 mb-1">{chef.specialty}</p>
              <p className="text-gray-500 text-sm flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {chef.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex gap-2 overflow-x-auto">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'View All' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <section className="max-w-7xl mx-auto px-8">
        {filteredMenu.map(({ category, items }) => (
          <div key={category} className="py-6">
            {selectedCategory === 'all' && (
              <h2 className="text-2xl font-bold mb-4">{category}</h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map(item => (
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
      </section>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <Link
          href="/home-made-food/snacks"
          className="text-gray-600 hover:text-black flex items-center gap-2"
        >
          ← Back to Snacks
        </Link>
      </div>
    </main>
  );
} 