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
  const [selectedVariants, setSelectedVariants] = useState<{ [productId: string]: { sizeIdx: number; flavorIdx: number } | number }>({});

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
    <div className="max-w-7xl mx-auto px-4 py-6 font-nunito">
      {/* Compact Header with Search */}
      <div className="flex items-center gap-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 whitespace-nowrap">{category}</h1>
        
        {/* Search Bar - Floating Design */}
        <div className="w-full max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products in this category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 pr-4 rounded-full border-2 border-[#FDBE28] focus:outline-none focus:ring-2 focus:ring-[#FDBE28] focus:border-transparent bg-white text-sm shadow-sm"
            />
            <FiSearch className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-[#FDBE28]" size={16} />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredProducts.map((product: Product) => {
          const hasSizes = product.variants && product.variants.sizes && product.variants.sizes.length > 0;
          const hasFlavors = product.variants && product.variants.flavors && product.variants.flavors.length > 0;
          // Support both old and new selectedVariants structure
          let selectedSizeIndex = 0;
          let selectedFlavorIndex = 0;
          if (typeof selectedVariants[product.id] === 'object' && selectedVariants[product.id] !== null) {
            selectedSizeIndex = (selectedVariants[product.id] as any).sizeIdx ?? 0;
            selectedFlavorIndex = (selectedVariants[product.id] as any).flavorIdx ?? 0;
          } else {
            selectedSizeIndex = (selectedVariants[product.id] as number) ?? 0;
          }
          const selectedSize = hasSizes ? product.variants!.sizes![selectedSizeIndex] : null;
          const selectedFlavor = hasFlavors ? product.variants!.flavors![selectedFlavorIndex] : null;
          const displayPrice = hasSizes && selectedSize ? selectedSize.price : product.price;

          // Helper for Add to Cart with variant
          const handleAddToCartVariant = (item: Product, sizeIdx?: number, flavorIdx?: number) => {
            if (!user) {
              const currentPath = window.location.pathname;
              toast.error('Please login to add items to cart');
              router.push(`/login?returnUrl=${encodeURIComponent(currentPath)}`);
              return;
            }
            const size = hasSizes ? product.variants!.sizes![sizeIdx ?? 0] : null;
            const flavor = hasFlavors ? product.variants!.flavors![flavorIdx ?? 0] : null;
            const idParts = [item.id];
            const nameParts = [item.name];
            if (hasSizes && size) {
              idParts.push(size.value);
              nameParts.push(`(${size.name})`);
            }
            if (hasFlavors && flavor) {
              idParts.push(flavor.value);
              nameParts.push(`[${flavor.name}]`);
            }
            const cartItem = {
              id: idParts.join('-'),
              name: nameParts.join(' '),
              price: hasSizes && size ? size.price : item.price,
              quantity: 1,
              vendor_id: 'whole-foods',
              description: item.description,
              category: 'Whole Foods'
            };
            addToCart(cartItem);
            toast.success(`${cartItem.name} added to cart!`);
          };

          return (
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
                      src={product.image || '/images/placeholder.png'}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  )}
                </div>
              </Link>
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div className="flex flex-col flex-1">
                  <h3 className="text-base font-semibold text-gray-800 line-clamp-2 min-h-[40px]">{product.name}</h3>
                  <p className="text-gray-600 text-xs line-clamp-2 min-h-[32px] mb-3">{product.description.split('•')[0]}</p>
                  {/* Variant selectors for sizes and flavors */}
                  {(hasSizes || hasFlavors) && (
                    <div className={`mb-2 flex ${hasSizes && hasFlavors ? 'gap-2' : ''}`}>
                      {hasSizes && (
                        <select
                          className="w-full border rounded px-2 py-1 text-sm"
                          value={selectedSizeIndex}
                          onChange={e => {
                            setSelectedVariants(v => ({
                              ...v,
                              [product.id]: hasFlavors
                                ? { sizeIdx: Number(e.target.value), flavorIdx: selectedFlavorIndex }
                                : Number(e.target.value)
                            }));
                          }}
                        >
                          {product.variants!.sizes!.map((size, idx) => (
                            <option key={size.value} value={idx}>
                              {size.name} - ₹{size.price}
                            </option>
                          ))}
                        </select>
                      )}
                      {hasFlavors && (
                        <select
                          className="w-full border rounded px-2 py-1 text-sm"
                          value={selectedFlavorIndex}
                          onChange={e => {
                            setSelectedVariants(v => ({
                              ...v,
                              [product.id]: hasSizes
                                ? { sizeIdx: selectedSizeIndex, flavorIdx: Number(e.target.value) }
                                : Number(e.target.value)
                            }));
                          }}
                        >
                          {product.variants!.flavors!.map((flavor, idx) => (
                            <option key={flavor.value} value={idx}>
                              {flavor.name}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-100 mt-auto">
                  <span className="text-lg font-bold text-gray-800">₹{displayPrice}</span>
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
                            if (hasSizes || hasFlavors) {
                              handleAddToCartVariant(product, selectedSizeIndex, selectedFlavorIndex);
                            } else {
                              handleAddToCart(product);
                            }
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
                          if (hasSizes || hasFlavors) {
                            handleAddToCartVariant(product, selectedSizeIndex, selectedFlavorIndex);
                          } else {
                            handleAddToCart(product);
                          }
                        }}
                        className="bg-black text-white px-3 py-1.5 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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