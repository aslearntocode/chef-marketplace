'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { chefs } from '@/data/chefs';
import { useCart } from '@/context/CartContext';
import type { MenuItem } from '@/types/menu';
import { getAuth } from 'firebase/auth';
import ChefHeader from '@/components/ChefHeader';
import { toast } from 'react-hot-toast';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  servingSize?: string;
  variants?: Array<{ name: string; price: number }>;
  extras?: Array<{ name: string; price: number }>;
}

export default function ChefPage() {
  const params = useParams();
  const chefId = params?.id as string;
  const chef = chefs.find(b => b.id === chefId);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { addToCart } = useCart();
  const router = useRouter();
  const auth = getAuth();
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [selectedExtras, setSelectedExtras] = useState<Record<string, Record<string, number>>>({});

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

    const selectedVariant = item.variants?.find(v => v.name === selectedVariants[item.id]);
    const extras = Object.entries(selectedExtras[item.id] || {})
      .filter(([_name, quantity]) => quantity > 0)
      .map(([name, quantity]) => ({
        name,
        quantity,
        price: item.extras?.find(e => e.name === name)?.price || 0
      }));

    const totalPrice = (Number(selectedVariant?.price || item.price)) + 
      extras.reduce((sum, extra) => sum + (extra.price * extra.quantity), 0);

    addToCart({
      id: `${chef.id}-${item.name.replace(/\s+/g, '-')}`,
      name: item.name + 
        (selectedVariant ? ` (${selectedVariant.name})` : '') +
        (extras.length ? ` + ${extras.map(e => `${e.quantity}x ${e.name}`).join(', ')}` : ''),
      price: totalPrice,
      chefId: chef.id,
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
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      {item.servingSize && (
                        <p className="text-sm text-gray-500 mb-2">
                          {item.servingSize}
                        </p>
                      )}
                      
                      {item.variants && (
                        <div className="mb-4">
                          <p className="text-sm font-medium mb-2">Select Option:</p>
                          <div className="flex gap-2">
                            {item.variants.map(variant => (
                              <button
                                key={variant.name}
                                onClick={() => setSelectedVariants({
                                  ...selectedVariants,
                                  [item.id]: variant.name
                                })}
                                className={`px-3 py-1 rounded-full text-sm ${
                                  selectedVariants[item.id] === variant.name
                                    ? 'bg-black text-white'
                                    : 'bg-gray-100 text-gray-700'
                                }`}
                              >
                                {variant.name} (₹{variant.price})
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {item.extras && (
                        <div className="mb-4">
                          <p className="text-sm font-medium mb-2">Add-ons:</p>
                          <div className="space-y-2">
                            {item.extras.map(extra => {
                              const quantity = selectedExtras[item.id]?.[extra.name] || 0;
                              return (
                                <div key={extra.name} className="flex items-center justify-between">
                                  <span className="text-sm text-gray-700">{extra.name} (+₹{extra.price})</span>
                                  <div className="flex items-center gap-2">
                                    <button
                                      onClick={() => {
                                        const currentExtras = selectedExtras[item.id] || {};
                                        const newQuantity = Math.max(0, (currentExtras[extra.name] || 0) - 1);
                                        setSelectedExtras({
                                          ...selectedExtras,
                                          [item.id]: {
                                            ...currentExtras,
                                            [extra.name]: newQuantity
                                          }
                                        });
                                      }}
                                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                                    >
                                      -
                                    </button>
                                    <span className="w-8 text-center">{quantity}</span>
                                    <button
                                      onClick={() => {
                                        const currentExtras = selectedExtras[item.id] || {};
                                        setSelectedExtras({
                                          ...selectedExtras,
                                          [item.id]: {
                                            ...currentExtras,
                                            [extra.name]: (currentExtras[extra.name] || 0) + 1
                                          }
                                        });
                                      }}
                                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">
                        ₹{Number(item.variants?.find(v => v.name === selectedVariants[item.id])?.price || item.price) +
                          (Object.entries(selectedExtras[item.id] || {})
                            .filter(([_name, quantity]) => quantity > 0)
                            .reduce((sum, [name, quantity]) => sum + (item.extras?.find(e => e.name === name)?.price || 0) * quantity, 0) || 0)}
                      </span>
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