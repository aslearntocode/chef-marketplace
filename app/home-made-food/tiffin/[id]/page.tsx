'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { tiffinServices } from '@/data/tiffin-services';
import { useCart } from '@/context/CartContext';
import type { MenuItem } from '@/types/menu';
import { getAuth } from 'firebase/auth';
import ChefHeader from '@/components/ChefHeader';
import { toast } from 'react-hot-toast';

export default function TiffinServicePage() {
  const params = useParams();
  const chefId = params?.id as string;
  const chef = tiffinServices.find(b => b.id.toString() === chefId);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { addToCart, items, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();
  const auth = getAuth();

  if (!chef) {
    return <div>Chef not found</div>;
  }

  const getItemQuantity = (itemId: string) => {
    const fullItemId = `${chef.id}-${itemId.replace(/\s+/g, '-')}`;
    const item = items.find(item => item.id === fullItemId);
    return item ? item.quantity : 0;
  };

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
      ? Number(item.price) 
      : item.price;

    addToCart({
      id: `${chef.id}-${item.name.replace(/\s+/g, '-')}`,
      name: item.name,
      price: itemPrice,
      chefId: chef.id.toString(),
      chefName: chef.name,
      description: item.description,
      category: item.category,
      quantity: 1,
      vendor_id: chef.id.toString()
    });

    toast.success(`${item.name} added to cart`);
  };

  const handleRemoveFromCart = (itemId: string) => {
    if (!auth.currentUser) return;
    const fullItemId = `${chef.id}-${itemId.replace(/\s+/g, '-')}`;
    const item = items.find(item => item.id === fullItemId);
    if (item && item.quantity > 1) {
      updateQuantity(fullItemId, item.quantity - 1);
    } else {
      removeFromCart(fullItemId);
    }
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
                      <div className="flex items-center space-x-2">
                        {getItemQuantity(item.name) > 0 ? (
                          <>
                            <button
                              onClick={() => handleRemoveFromCart(item.name)}
                              className="bg-gray-200 text-gray-800 px-3 py-1 rounded"
                            >
                              -
                            </button>
                            <span className="mx-2">{getItemQuantity(item.name)}</span>
                            <button
                              onClick={() => handleAddToCart(item)}
                              className="bg-gray-200 text-gray-800 px-3 py-1 rounded"
                            >
                              +
                            </button>
                          </>
                        ) : (
                          <button 
                            onClick={() => handleAddToCart(item)}
                            className="bg-black text-white w-full max-w-xs mx-auto px-3 py-2 rounded-md hover:bg-gray-800 transition-colors text-base sm:w-auto sm:mx-0"
                          >
                            Add to Cart
                          </button>
                        )}
                      </div>
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