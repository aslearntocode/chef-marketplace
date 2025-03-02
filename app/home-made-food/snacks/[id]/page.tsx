'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { auth } from '@/firebase/config';
import { snacksChefs } from '@/data/snacks';
import { useCart } from '@/context/CartContext';
import type { SnackMenuItem, SnackChef } from '@/types/snack';

export default function SnackChefPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Safely handle params.id
  const chefId = params?.id ? (Array.isArray(params.id) ? params.id[0] : params.id) : null;
  
  // Use the converted chefId to find the chef and add type annotation
  const chef: SnackChef | undefined = chefId ? snacksChefs.find(chef => chef.id === chefId) : undefined;

  // Add console.log for debugging
  console.log('Params:', params);
  console.log('Chef ID:', chefId);
  console.log('Found Chef:', chef);

  if (!chef) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Chef not found</p>
      </div>
    );
  }

  const allCategories = chef.menu.map(m => m.category);
  const categories = ['all', ...new Set(allCategories)];

  const filteredMenu = selectedCategory === 'all'
    ? chef.menu
    : chef.menu.filter(category => category.category === selectedCategory);

  const handleAddToCart = (item: SnackMenuItem) => {
    const currentUser = auth.currentUser;
    
    if (!currentUser) {
      toast.error('Please log in to add items to cart');
      router.push('/login');
      return;
    }

    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
      chefId: chef.id,
      chefName: chef.name
    });

    toast.success(`${item.name} added to cart`);
  };

  return (
    <main className="max-w-7xl mx-auto">
      {/* Spacer for navbar */}
      <div className="h-[72px]" />

      {/* Chef Info Section */}
      <section className="bg-white border-b w-full">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center gap-6">
            {/* Chef Image */}
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

            {/* Chef Info */}
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

          {/* Notes Section - if needed */}
          {chef.notes && chef.notes.length > 0 && (
            <div className="mt-6">
              <div className="flex flex-wrap gap-2">
                {chef.notes.map((note, index) => (
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

      {/* Category Filter */}
      <div className="px-8 py-4">
        <div className="flex gap-2 overflow-x-auto">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === 'all' 
                ? 'bg-black text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            View All
          </button>
          {categories.filter(cat => cat !== 'all').map(category => (
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
      </div>

      {/* Menu Items */}
      {filteredMenu.map(category => (
        <div key={category.category} className="px-8 py-6">
          <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.items.map(item => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-semibold">₹{item.price}</span>
                    {item.unit && <span className="text-gray-500">/ {item.unit}</span>}
                  </div>
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
    </main>
  );
} 