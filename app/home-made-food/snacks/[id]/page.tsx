'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { snacksChefs } from '@/data/snacks';
import type { MenuItem } from '@/types/menu';
import { getAuth } from 'firebase/auth';
import ChefHeader from '@/components/ChefHeader';
import { toast } from 'react-hot-toast';
import { useCart } from '@/context/CartContext';

interface ChefMenu {
  [key: string]: MenuItem[];
}

interface Chef {
  id: string;
  name: string;
  specialty: string;
  menu: ChefMenu;
  // ... other properties
}

export default function SnackChefPage() {
  const params = useParams();
  const chefId = params?.id as string;
  const chef = snacksChefs.find(b => b.id.toString() === chefId);
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
    ? Object.entries(chef.menu as ChefMenu).map(([category, items]) => ({ category, items }))
    : [{
      category: selectedCategory,
      items: (chef.menu as ChefMenu)[selectedCategory] || []
    }];

  const handleAddToCart = (item: MenuItem) => {
    if (!auth.currentUser) {
      const currentPath = window.location.pathname;
      router.push(`/login?returnUrl=${encodeURIComponent(currentPath)}`);
      return;
    }

    addToCart({
      id: `${chef.id}-${item.name.replace(/\s+/g, '-')}`,
      name: item.name,
      price: typeof item.price === 'string' ? Number(item.price) : item.price,
      chefId: chef.id.toString(),
      chefName: chef.name,
      category: selectedCategory,
      quantity: 1,
      vendor_id: chef.id.toString()
    });

    toast.success(`${item.name} added to cart`);
  };

  return (
    <main>
      <div className="h-[72px]" />
      <ChefHeader
        image={chef.image}
        name={chef.name}
        rating={chef.rating}
        specialty={chef.specialty}
        location={chef.location}
        description={chef.description}
        notes={chef.notes}
        vendorId={chef.id.toString()}
      />

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
              {items.map((item: MenuItem) => (
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