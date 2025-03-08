'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { tiffinServices } from '@/data/tiffin-services';
import type { Chef } from '@/types/chef';
import { useCart } from '@/context/CartContext';
import type { MenuItem } from '@/types/menu';
import { getAuth } from 'firebase/auth';
import ChefHeader from '@/components/ChefHeader';
import { toast } from 'react-hot-toast';

export default function TiffinServicePage() {
  const params = useParams();
  const chefId = params?.id as string;
  const chef = tiffinServices.find(b => b.id === chefId);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { addToCart } = useCart();
  const router = useRouter();
  const auth = getAuth();

  if (!chef) {
    return <div>Chef not found</div>;
  }

  // Function to get menu items based on selected category
  const getMenuItems = () => {
    if (selectedCategory === 'all') {
      return Object.entries(chef.menu).map(([category, items]) => ({
        category,
        items: items || []
      }));
    }
    return [{
      category: selectedCategory,
      items: chef.menu[selectedCategory] || []
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
      id: `${chef.id}-${item.name.replace(/\s+/g, '-')}`,
      name: item.name,
      price: itemPrice,
      chefId: chef.id,
      chefName: chef.name,
      description: item.description,
      category: item.category,
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
          {Object.keys(chef.menu).map(category => (
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