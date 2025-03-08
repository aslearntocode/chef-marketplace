'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { bakers } from '@/data/bakers';
import { useCart } from '@/context/CartContext';
import { getAuth } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import ChefHeader from '@/components/ChefHeader';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  parentItem?: string;
  discountedPrice?: number;
  category?: string;
}

export default function BakerPage() {
  const params = useParams();
  const bakerId = params?.id as string;
  const baker = bakers.find(b => b.id === bakerId);
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

  const filteredMenu = selectedCategory === 'all'
    ? Object.entries(baker.menu).map(([category, items]) => ({ category, items }))
    : [{
      category: selectedCategory,
      items: (baker.menu as unknown as Record<string, MenuItem[]>)[selectedCategory] || []
    }];

  const handleAddToCart = (item: MenuItem) => {
    // Check if user is logged in
    if (!auth.currentUser) {
      const currentPath = window.location.pathname;
      router.push(`/login?returnUrl=${encodeURIComponent(currentPath)}`);
      return;
    }

    const itemPrice = item.discountedPrice !== undefined && item.discountedPrice !== null
      ? item.discountedPrice
      : item.price;

    addToCart({
      id: `${baker.id}-${item.id}`,
      name: item.name,
      price: itemPrice,
      bakerId: baker.id,
      bakerName: baker.name,
      description: item.description,
      category: item.category,
      quantity: 1,
      vendor_id: baker.id.toString()
    });

    toast.success(`${item.name} added to cart`);
  };

  return (
    <main>
      <div className="h-[72px]" />
      <ChefHeader
        image={baker.image}
        name={baker.name}
        rating={baker.rating}
        specialty={baker.specialty}
        location={baker.location}
        description={baker.description}
        notes={baker.notes}
        vendorId={baker.id.toString()}
      />

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
          {filteredMenu.map(({ category, items }) => (
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
                        onClick={() => handleAddToCart(item as MenuItem)}
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