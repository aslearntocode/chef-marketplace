'use client';

import { useState } from 'react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { FiSearch, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { products } from '../../data/whole-foods';
import type { Product } from '../../types/whole-foods';

export default function WholeFoods() {
  const { user } = useAuth();
  const { addToCart, removeFromCart, items, updateQuantity, clearCart } = useCart();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});

  // Define categories based on the products
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'healthy-sweet', name: 'Healthy Sweets' },
    { id: 'sweet', name: 'Traditional Sweets' },
    { id: 'drinks', name: 'Healthy Drinks' },
    { id: 'healthy-bites', name: 'Healthy Bites' },
    { id: 'pickles', name: 'Pickles' }
  ];

  const filteredProducts = products.filter((product: Product) => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      product.name.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.category.toLowerCase().includes(searchLower) ||
      product.tags.some((tag: string) => tag.toLowerCase().includes(searchLower));

    const matchesCategory = selectedCategory === 'all' || 
      product.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Group products by category
  const productsByCategory: Record<string, Product[]> = products.reduce((acc: Record<string, Product[]>, product: Product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

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

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <main className="relative mt-[72px]">
      {/* Main Content with Search Bar */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Centered Search Bar with reduced width */}
        <div className="max-w-2xl mx-auto mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products by name, description, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-9 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white text-sm"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>
        </div>

        {/* Conditional rendering based on search query */}
        {searchQuery ? (
          // Show search results
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Search Results</h2>
              <p className="text-gray-600">
                {filteredProducts.length} products found for "{searchQuery}"
              </p>
            </div>
            
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
                                  e.stopPropagation();
                                  handleImageNav(product.id, 'prev', product.images!.length);
                                }}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                ←
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
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
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="text-base font-semibold text-gray-800 line-clamp-2 min-h-[40px]">{product.name}</h3>
                          <span className="text-xs bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
                            {product.category}
                          </span>
                        </div>
                        <p className="text-gray-600 text-xs line-clamp-2 min-h-[32px] mb-3">{product.description}</p>
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
          </div>
        ) : selectedCategory !== 'all' ? (
          // Show selected category products
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {categories.find(cat => cat.id === selectedCategory)?.name}
              </h2>
              <button
                onClick={() => handleCategorySelect('all')}
                className="px-4 py-2 text-base font-medium text-gray-600 hover:text-black bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center gap-2"
              >
                ← Back to categories
              </button>
            </div>
            
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
                                  e.stopPropagation();
                                  handleImageNav(product.id, 'prev', product.images!.length);
                                }}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                ←
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
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
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="text-base font-semibold text-gray-800 line-clamp-2 min-h-[40px]">{product.name}</h3>
                          <span className="text-xs bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
                            {product.category}
                          </span>
                        </div>
                        <p className="text-gray-600 text-xs line-clamp-2 min-h-[32px] mb-3">{product.description}</p>
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
          </div>
        ) : (
          // Show category cards
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(productsByCategory).map(([category, categoryProducts]) => (
                <div 
                  key={category}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Category Header */}
                  <div className="p-3 border-b">
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-bold">{category}</h2>
                      <Link 
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleCategorySelect(category.toLowerCase().replace(/\s+/g, '-'));
                          setSearchQuery('');
                        }}
                        className="text-xs text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        See all
                      </Link>
                    </div>
                  </div>

                  {/* Preview Grid - 4 Products */}
                  <div className="grid grid-cols-2 gap-3 p-3">
                    {categoryProducts.slice(0, 4).map((product: Product) => (
                      <div 
                        key={product.id} 
                        className="relative group cursor-pointer"
                        onClick={() => {
                          handleCategorySelect(category.toLowerCase().replace(/\s+/g, '-'));
                        }}
                      >
                        <div className="aspect-square relative overflow-hidden rounded-md">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-200"
                            sizes="(max-width: 768px) 40vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-200" />
                        </div>
                        <div className="mt-1.5">
                          <h3 className="text-xs font-medium line-clamp-2 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                          <p className="text-xs font-bold text-gray-900 mt-0.5">₹{product.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 