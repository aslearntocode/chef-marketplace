'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { Product } from '@/types/whole-foods';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';

interface CategoryPageProps {
  category: string;
  products: Product[];
}

export default function CategoryPage({ category, products }: CategoryPageProps) {
  const { user } = useAuth();
  const { addToCart, removeFromCart, items, updateQuantity } = useCart();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});

  const filteredProducts = products.filter((product: Product) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.tags.some((tag: string) => tag.toLowerCase().includes(searchLower))
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

  const getItemQuantity = (productId: string) => {
    if (!user) return 0;
    const item = items.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  const handleImageNav = (productId: string, direction: 'prev' | 'next', totalImages: number) => {
    setCurrentImageIndex(prev => {
      const current = prev[productId] || 0;
      if (direction === 'next') {
        return { ...prev, [productId]: (current + 1) % totalImages };
      } else {
        return { ...prev, [productId]: (current - 1 + totalImages) % totalImages };
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Compact Header with Search */}
      <div className="flex flex-col items-center justify-center relative mb-8">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-gray-900">{category}</h1>
          <p className="text-sm text-gray-600 mt-1">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} available
          </p>
        </div>
        
        {/* Search Bar - Floating Design */}
        <div className="w-full max-w-xl relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products in this category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 pr-4 rounded-full border-2 border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white text-sm shadow-sm"
            />
            <FiSearch className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-yellow-500" size={16} />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredProducts.map((product: Product) => (
          <div key={product.id} id={`product-${product.id}`} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
            <Link href={`/whole-foods/${product.id}`} className="block">
              <div className="relative w-full pt-[100%] bg-[#f8f8f8] group">
                {product.images ? (
                  <>
                    <Image
                      src={product.images[currentImageIndex[product.id] || 0]}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                    {product.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleImageNav(product.id, 'prev', product.images!.length);
                          }}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          ←
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleImageNav(product.id, 'next', product.images!.length);
                          }}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          →
                        </button>
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                          {product.images.map((_: string, index: number) => (
                            <div
                              key={index}
                              className={`w-2 h-2 rounded-full ${
                                (currentImageIndex[product.id] || 0) === index ? 'bg-black' : 'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                )}
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="flex flex-col flex-1">
                  <h3 className="text-base font-semibold text-gray-800 line-clamp-2 min-h-[40px]">{product.name}</h3>
                  <p className="text-gray-600 text-xs line-clamp-2 min-h-[32px] mb-3">{product.description.split('•')[0]}</p>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-100 mt-auto">
                  <span className="text-lg font-bold text-gray-800">₹{product.price}</span>
                  <div className="flex items-center space-x-1">
                    {getItemQuantity(product.id) > 0 ? (
                      <div className="flex items-center bg-gray-100 rounded-lg p-1">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleRemoveFromCart(product.id);
                          }}
                          className="bg-white text-gray-800 w-6 h-6 rounded-md flex items-center justify-center shadow-sm hover:bg-gray-50"
                        >
                          -
                        </button>
                        <span className="mx-2 text-sm font-medium">{getItemQuantity(product.id)}</span>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleAddToCart(product);
                          }}
                          className="bg-white text-gray-800 w-6 h-6 rounded-md flex items-center justify-center shadow-sm hover:bg-gray-50"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToCart(product);
                        }}
                        className="bg-black text-white px-3 py-1.5 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </Link>
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
  );
} 