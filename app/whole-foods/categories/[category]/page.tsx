'use client';

import { useState, use, useEffect } from 'react';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { FiSearch } from 'react-icons/fi';
import { products } from '@/data/whole-foods';
import { Product } from '@/types/whole-foods';
import Breadcrumb from '@/components/Breadcrumb';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = use(params);
  const { user } = useAuth();
  const { addToCart, removeFromCart, items, updateQuantity } = useCart();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  // Get category name from the URL parameter
  const categoryName = category.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  // Filter products by category
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === categoryName.toLowerCase()
  );

  // Filter products based on search
  const filteredProducts = categoryProducts.filter(product => {
    const searchLower = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  });

  const getItemQuantity = (productId: string) => {
    if (!user) return 0;
    const item = items.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  const handleAddToCart = async (item: Product) => {
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

    await addToCart(cartItem);
    toast.success(`${item.name} added to cart!`);
  };

  const handleRemoveFromCart = (productId: string) => {
    if (!user) {
      const currentPath = window.location.pathname;
      toast.error('Please login to manage cart items');
      router.push(`/login?returnUrl=${encodeURIComponent(currentPath)}`);
      return;
    }
    
    const item = items.find(item => item.id === productId);
    if (item && item.quantity > 1) {
      updateQuantity(productId, item.quantity - 1);
    } else {
      removeFromCart(productId);
    }
  };

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[72px] font-nunito">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb Navigation */}
        <Breadcrumb customPaths={{ [category]: categoryName }} />
        
        {/* Category Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{categoryName}</h1>
          <p className="text-sm text-gray-600 mt-1">Discover our range of {categoryName.toLowerCase()} products</p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 pr-4 rounded-full border-2 border-[#FDBE28] focus:outline-none focus:ring-2 focus:ring-[#FDBE28] focus:border-transparent bg-white text-sm shadow-sm"
            />
            <FiSearch className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-[#FDBE28]" size={16} />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-square">
                <Image
                  src={product.image || '/images/placeholder.png'}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold">₹{product.price}</p>
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
                        className="bg-black text-white w-full max-w-xs mx-auto px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors text-base sm:w-auto sm:mx-0"
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-600">No products found matching your search.</p>
          </div>
        )}
      </div>
    </main>
  );
} 