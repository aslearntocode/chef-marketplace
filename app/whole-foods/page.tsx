'use client';

import { useState } from 'react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { FiSearch } from 'react-icons/fi';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Organic Quinoa',
    description: 'Premium organic quinoa, high in protein and fiber. Perfect for healthy meals.',
    price: 299,
    image: '/whole-foods/quinoa.jpg',
    category: 'Grains'
  },
  {
    id: '2',
    name: 'Chia Seeds',
    description: 'Nutrient-rich chia seeds packed with omega-3 fatty acids and antioxidants.',
    price: 199,
    image: '/whole-foods/chia-seeds.jpg',
    category: 'Seeds'
  },
  {
    id: '3',
    name: 'Raw Almonds',
    description: 'Fresh, raw almonds. Rich in healthy fats, protein, and vitamin E.',
    price: 399,
    image: '/whole-foods/almonds.jpg',
    category: 'Nuts'
  },
  {
    id: '4',
    name: 'Organic Honey',
    description: 'Pure, unprocessed organic honey. Natural sweetener with antibacterial properties.',
    price: 349,
    image: '/whole-foods/honey.jpg',
    category: 'Sweeteners'
  }
];

export default function WholeFoods() {
  const { user } = useAuth();
  const { addToCart, removeFromCart, items, updateQuantity, clearCart } = useCart();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const searchLower = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.category.toLowerCase().includes(searchLower)
    );
  });

  const handleAddToCart = (item: Product) => {
    if (!user) {
      toast.error('Please login to add items to cart');
      router.push('/login');
      return;
    }

    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      vendor_id: 'whole-foods',
      description: item.description,
      category: 'Whole Foods'
    };

    addToCart(cartItem);
    toast.success(`${item.name} added to cart!`);
  };

  const handleRemoveFromCart = (productId: string) => {
    if (!user) return;
    const item = items.find(item => item.id === productId);
    if (item && item.quantity > 1) {
      updateQuantity(productId, item.quantity - 1);
    } else {
      removeFromCart(productId);
    }
  };

  const getItemQuantity = (productId: string) => {
    const item = items.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <main>
      <div className="h-[72px]" />
      <PageHeader
        title="Whole Foods"
        description="Discover our selection of organic and natural whole foods for a healthier lifestyle"
      />
      
      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products by name, description, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600 text-lg">No products found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">₹{product.price}</span>
                    <div className="flex items-center space-x-2">
                      {getItemQuantity(product.id) > 0 ? (
                        <>
                          <button
                            onClick={() => handleRemoveFromCart(product.id)}
                            className="bg-gray-200 text-gray-800 px-3 py-1 rounded"
                          >
                            -
                          </button>
                          <span className="mx-2">{getItemQuantity(product.id)}</span>
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="bg-gray-200 text-gray-800 px-3 py-1 rounded"
                          >
                            +
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
} 