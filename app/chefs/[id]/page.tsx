'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { chefs } from '@/data/chefs';
import { toast } from 'react-hot-toast';
import { useCart } from '@/context/CartContext';
import type { MenuItem } from '@/types/menu';
import { getAuth } from 'firebase/auth';
import ChefHeader from '@/components/ChefHeader';

export default function ChefPage() {
  const params = useParams();
  const chefId = params?.id ? Number(params.id) : null;
  const chef = chefId ? chefs.find(c => c.id === chefId) : undefined;
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
    : [{ category: selectedCategory, items: chef.menu[selectedCategory as keyof typeof chef.menu] || [] }];

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
      chefId: chef.id,
      chefName: chef.name,
      category: selectedCategory
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
      />

      {/* Menu Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Tabs */}
        <div className="flex overflow-x-auto gap-4 mb-8 pb-2">
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

        {/* Menu Items */}
        <div className="space-y-8">
          {filteredMenu.map(({ category, items }) => (
            <div key={category}>
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
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link
          href="/home-made-food"
          className="text-gray-600 hover:text-black flex items-center gap-2"
        >
          ← Back to Chefs
        </Link>
      </div>
    </main>
  );
} 