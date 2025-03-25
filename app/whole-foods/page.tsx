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
    name: 'Coconut Barfi with Jaggery',
    description: 'Premium organic quinoa, high in protein and fiber. Perfect for healthy meals.',
    price: 299,
    image: '/images/Coconut Barfi With Jaggery.jpeg',
    category: 'Grains'
  },
  {
    id: '2',
    name: 'Coconut Barfi with Sugar',
    description: 'Nutrient-rich chia seeds packed with omega-3 fatty acids and antioxidants.',
    price: 199,
    image: '/images/Coconut Barfi With Sugar.jpeg',
    category: 'Seeds'
  },
  {
    id: '3',
    name: 'Sugar Free Dates and Peanut Ladoo',
    description: 'Fresh, raw almonds. Rich in healthy fats, protein, and vitamin E.',
    price: 399,
    image: '/images/SUGAR FREE DATES AND PEANUT LADDOO.jpeg',
    category: 'Nuts'
  },
  {
    id: '4',
    name: 'Sugar Free Drryfruits Ladoo',
    description: 'Pure, unprocessed organic honey. Natural sweetener with antibacterial properties.',
    price: 349,
    image: '/images/Sugar Free Dryfruits laddoo.jpeg',
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
      const currentPath = window.location.pathname;
      toast.error('Please login to add items to cart');
      router.push(`/login?returnUrl=${encodeURIComponent(currentPath)}`);
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
            className="w-full px-4 py-3 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white"
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative w-full pt-[100%] bg-[#f8f8f8]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <div className="flex flex-col mb-3">
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h3 className="text-base font-semibold text-gray-800 flex-1">{product.name}</h3>
                      <span className="text-xs bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded-full font-medium">
                        {product.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-xs line-clamp-2">{product.description}</p>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <span className="text-lg font-bold text-gray-800">₹{product.price}</span>
                    <div className="flex items-center space-x-1">
                      {getItemQuantity(product.id) > 0 ? (
                        <div className="flex items-center bg-gray-100 rounded-lg p-1">
                          <button
                            onClick={() => handleRemoveFromCart(product.id)}
                            className="bg-white text-gray-800 w-6 h-6 rounded-md flex items-center justify-center shadow-sm hover:bg-gray-50"
                          >
                            -
                          </button>
                          <span className="mx-2 text-sm font-medium">{getItemQuantity(product.id)}</span>
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="bg-white text-gray-800 w-6 h-6 rounded-md flex items-center justify-center shadow-sm hover:bg-gray-50"
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="bg-black text-white px-3 py-1.5 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium"
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