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
  const { addToCart } = useCart();
  const router = useRouter();
  const auth = getAuth();
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [selectedExtras, setSelectedExtras] = useState<Record<string, Record<string, number>>>({});

  if (!chef) {
    return <div>Chef not found</div>;
  }

  const categories = Object.keys(chef.menu);
  const items = selectedCategory === 'all'
    ? Object.values(chef.menu).flat()
    : chef.menu[selectedCategory as keyof typeof chef.menu] || [];

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
      id: item.id,
      name: item.name,
      price: variant ? variant.price : item.price,
      quantity: 1,
      chefId: chef.id,
      chefName: chef.name,
      extras: extras,
      variant: variant ? variant.name : undefined
    };

    addToCart(cartItem);
    toast.success('Added to cart!');
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 mt-24">
      <ChefHeader chef={chef} />

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === 'all'
                ? 'bg-primary text-white'
                : 'bg-gray-100'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item: MenuItem) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
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
                  <span>Price</span>
                  <span className="font-semibold">₹{item.price}</span>
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
              <button
                onClick={() => handleAddToCart(item)}
                className="mt-4 w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 