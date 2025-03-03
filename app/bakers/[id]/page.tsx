'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { bakers } from '@/data/bakers';
import type { Baker } from '@/types/baker';
import { useCart } from '@/context/CartContext';
import type { MenuItem } from '@/types/menu';
import { getAuth } from 'firebase/auth';
import { toast } from 'react-hot-toast';

export default function BakerPage() {
  const params = useParams();
  const bakerId = params?.id ? Number(params.id) : null;
  const baker = bakerId ? bakers.find(b => b.id === bakerId) as Baker | undefined : undefined;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { addToCart } = useCart();
  const router = useRouter();
  const auth = getAuth();

  if (!baker) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Baker not found</p>
      </div>
    );
  }

  const getMenuItems = () => {
    if (selectedCategory === 'all') {
      return Object.entries(baker.menu).map(([category, items]) => ({
        category,
        items: items || []
      }));
    }
    return [{
      category: selectedCategory,
      items: baker.menu[selectedCategory] || []
    }];
  };

  const handleAddToCart = (item: MenuItem) => {
    // Check if user is logged in
    if (!auth.currentUser) {
      toast.error('Please log in to add items to cart');
      router.push('/login');
      return;
    }

    const itemPrice = typeof item.price === 'string' 
      ? Number(item.price.replace(/[^\d.]/g, ''))
      : item.price;

    addToCart({
      id: `${baker.id}-${item.id}`,
      name: item.name,
      price: itemPrice,
      bakerId: baker.id,
      bakerName: baker.name,
      description: item.description,
      category: item.category
    });

    toast.success(`${item.name} added to cart`);
  };

  return (
    <main>
      {/* Spacer for navbar */}
      <div className="h-[72px]" />

      {/* Baker Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-6">
            {/* Baker Image */}
            <div className="relative w-32 h-32">
              <Image
                src={baker.image}
                alt={baker.name}
                fill
                className="object-cover rounded-full border-2 border-gray-100 shadow-md"
                sizes="(max-width: 768px) 128px, 128px"
                priority
              />
            </div>

            {/* Baker Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold">{baker.name}</h1>
                <span className="flex items-center bg-green-50 text-green-800 px-2 py-1 rounded-full text-sm">
                  ⭐ {baker.rating}
                </span>
              </div>
              <p className="text-gray-600 mb-1">{baker.specialty}</p>
              <p className="text-gray-500 text-sm flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {baker.location}
              </p>
            </div>
          </div>

          {/* Notes Section - Styled as pills */}
          {baker.notes && baker.notes.length > 0 && (
            <div className="mt-6">
              <div className="flex flex-wrap gap-2">
                {baker.notes.map((note, index) => (
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
          {Object.keys(baker.menu).map(category => (
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
          href="/home-made-desserts"
          className="text-gray-600 hover:text-black flex items-center gap-2"
        >
          ← Back to Bakers
        </Link>
      </div>
    </main>
  );
} 