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

export default function ChefPage() {
  const params = useParams();
  const chefId = params?.id as string;
  const chef = chefs.find(b => b.id === chefId);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { addToCart, items: cartItems, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();
  const auth = getAuth();
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [selectedExtras, setSelectedExtras] = useState<Record<string, Record<string, number>>>({});

  if (!chef) {
    return <div>Chef not found</div>;
  }

  const categories = Object.keys(chef.menu);
  const menuItems = selectedCategory === 'all'
    ? Object.values(chef.menu).flat()
    : chef.menu[selectedCategory as keyof typeof chef.menu] || [];

  const getItemQuantity = (itemId: string) => {
    const item = cartItems.find(item => item.id === `${chef.id}-${itemId}`);
    return item ? item.quantity : 0;
  };

  const handleAddToCart = (item: MenuItem) => {
    if (!auth.currentUser) {
      toast.error('Please login to add items to cart');
      router.push('/login');
      return;
    }

    const variant = item.variants && selectedVariants[item.id]
      ? item.variants.find(v => v.name === selectedVariants[item.id])
      : null;

    const selectedItemExtras = selectedExtras[item.id] || {};
    const extras = item.extras
      ? item.extras.filter(extra => selectedItemExtras[extra.name])
      : [];

    const cartItem = {
      id: `${chef.id}-${item.id}`,
      name: item.name,
      price: variant ? variant.price : item.price,
      quantity: 1,
      chefId: chef.id,
      chefName: chef.name,
      vendor_id: chef.id,
      extras: extras,
      variant: variant ? variant.name : undefined
    };

    addToCart(cartItem);
    toast.success('Added to cart!');
  };

  const handleRemoveFromCart = (itemId: string) => {
    if (!auth.currentUser) return;
    const fullItemId = `${chef.id}-${itemId}`;
    const item = cartItems.find(item => item.id === fullItemId);
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
          {categories.map((category) => (
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
          {selectedCategory === 'all' ? (
            Object.entries(chef.menu).map(([category, items]) => (
              <div key={category}>
                <h2 className="text-2xl font-bold mb-4">{category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {items.map((item: MenuItem) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        {item.description && (
                          <p className="text-gray-600 mb-4">{item.description}</p>
                        )}
                        {item.servingSize && (
                          <p className="text-sm text-gray-500 mb-2">
                            {item.servingSize}
                          </p>
                        )}
                      </div>
                      <div>
                        {item.variants ? (
                          <div className="space-y-2">
                            {item.variants.map((variant, idx) => (
                              <div
                                key={idx}
                                className="flex justify-between items-center"
                              >
                                <span>{variant.name}</span>
                                <span className="font-semibold">
                                  ₹{variant.price}
                                </span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold">₹{item.price}</span>
                            <div className="flex items-center space-x-2">
                              {getItemQuantity(item.id) > 0 ? (
                                <>
                                  <button
                                    onClick={() => handleRemoveFromCart(item.id)}
                                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded"
                                  >
                                    -
                                  </button>
                                  <span className="mx-2">{getItemQuantity(item.id)}</span>
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
                                  className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                                >
                                  Add to Cart
                                </button>
                              )}
                            </div>
                          </div>
                        )}
                        {item.extras && (
                          <div className="mt-2 pt-2 border-t">
                            <p className="text-sm font-medium mb-1">Extras:</p>
                            {item.extras.map((extra, idx) => (
                              <div
                                key={idx}
                                className="flex justify-between items-center text-sm text-gray-600"
                              >
                                <span>{extra.name}</span>
                                <span>₹{extra.price}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.map((item: MenuItem) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    {item.description && (
                      <p className="text-gray-600 mb-4">{item.description}</p>
                    )}
                    {item.servingSize && (
                      <p className="text-sm text-gray-500 mb-2">
                        {item.servingSize}
                      </p>
                    )}
                  </div>
                  <div>
                    {item.variants ? (
                      <div className="space-y-2">
                        {item.variants.map((variant, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between items-center"
                          >
                            <span>{variant.name}</span>
                            <span className="font-semibold">
                              ₹{variant.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">₹{item.price}</span>
                        <div className="flex items-center space-x-2">
                          {getItemQuantity(item.id) > 0 ? (
                            <>
                              <button
                                onClick={() => handleRemoveFromCart(item.id)}
                                className="bg-gray-200 text-gray-800 px-3 py-1 rounded"
                              >
                                -
                              </button>
                              <span className="mx-2">{getItemQuantity(item.id)}</span>
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
                              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                            >
                              Add to Cart
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                    {item.extras && (
                      <div className="mt-2 pt-2 border-t">
                        <p className="text-sm font-medium mb-1">Extras:</p>
                        {item.extras.map((extra, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between items-center text-sm text-gray-600"
                          >
                            <span>{extra.name}</span>
                            <span>₹{extra.price}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link
          href="/home-made-food"
          className="text-gray-600 hover:text-black flex items-center gap-2"
        >
          ← Back to Home Made Food
        </Link>
      </div>
    </main>
  );
} 