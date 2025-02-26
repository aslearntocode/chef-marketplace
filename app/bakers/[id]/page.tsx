'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { bakers } from '@/data/bakers';
import type { Baker } from '@/types/baker';

export default function BakerPage() {
  const params = useParams();
  const bakerId = params?.id ? Number(params.id) : null;
  const baker = bakerId ? bakers.find(b => b.id === bakerId) as Baker | undefined : undefined;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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

  return (
    <main>
      {/* Spacer for navbar */}
      <div className="h-[72px]" />

      {/* Baker Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Baker Image */}
            <div className="relative w-full md:w-1/3 h-[300px]">
              <Image
                src={baker.image}
                alt={baker.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Baker Info */}
            <div className="md:w-2/3">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl font-bold">{baker.name}</h1>
                <span className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  ⭐ {baker.rating}
                </span>
              </div>
              <p className="text-xl text-gray-600 mb-2">{baker.specialty}</p>
              <p className="text-gray-500 mb-4">{baker.location}</p>
              <p className="text-gray-700 mb-6">{baker.description}</p>

              {/* Delivery Areas */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Delivery Areas:</h3>
                <div className="flex flex-wrap gap-2">
                  {baker.deliveryAreas.map(area => (
                    <span key={area} className="bg-blue-100 px-3 py-1 rounded-full text-sm text-blue-600">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
                      <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
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
          href="/bakers"
          className="text-gray-600 hover:text-black flex items-center gap-2"
        >
          ← Back to Bakers
        </Link>
      </div>
    </main>
  );
} 