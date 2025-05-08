'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { Product } from '@/types/whole-foods';
import { toast } from 'react-hot-toast';
import { useRouter, useSearchParams } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';

interface CategoryPageProps {
  category: string;
  products: Product[];
}

interface VariantState {
  sizeIdx: number;
  flavorIdx: number;
}

type VariantMap = Record<string, VariantState>;

export default function CategoryPage({ category, products }: CategoryPageProps) {
  const { user } = useAuth();
  const router = useRouter();
  const { addToCart, updateQuantity, removeFromCart, items } = useCart();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams?.get('q') || '');
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<string, number>>({});
  const [selectedVariants, setSelectedVariants] = useState<VariantMap>({});

  // Update search query when URL parameter changes
  useEffect(() => {
    const q = searchParams?.get('q');
    if (q) {
      setSearchQuery(q);
    }
  }, [searchParams]);

  // Update URL when search query changes
  useEffect(() => {
    if (searchQuery) {
      const url = new URL(window.location.href);
      url.searchParams.set('q', searchQuery);
      window.history.replaceState({}, '', url.toString());
    } else {
      const url = new URL(window.location.href);
      url.searchParams.delete('q');
      window.history.replaceState({}, '', url.toString());
    }
  }, [searchQuery]);

  const filteredProducts = products.filter((product: Product) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.tags.some((tag: string) => tag.toLowerCase().includes(searchLower))
    );
  });

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
      category: 'Whole Foods',
      image: item.images?.[0] || item.image
    };

    try {
      addToCart(cartItem);
      toast.success(`${item.name} added to cart!`);
      // Initialize variant state for this product
      setSelectedVariants(prev => ({
        ...prev,
        [item.id]: { sizeIdx: 0, flavorIdx: 0 }
      }));
    } catch (error) {
      toast.error('Failed to add item to cart');
      console.error('Error adding to cart:', error);
    }
  };

  const handleRemoveFromCart = (productId: string) => {
    if (!user) {
      const currentPath = window.location.pathname;
      toast.error('Please login to manage cart items');
      router.push(`/login?returnUrl=${encodeURIComponent(currentPath)}`);
      return;
    }
    
    try {
      // Get the current variant state for this product
      const variantState = selectedVariants[productId] || { sizeIdx: 0, flavorIdx: 0 };
      const { sizeIdx, flavorIdx } = variantState;
      
      // Generate the correct cart item ID
      const cartItemId = getCartItemId(
        products.find(p => p.id === productId)!,
        sizeIdx,
        flavorIdx
      );

      const item = items.find(item => item.id === cartItemId);
      if (!item) {
        console.error('Item not found in cart:', cartItemId);
        return;
      }

      if (item.quantity > 1) {
        updateQuantity(cartItemId, item.quantity - 1);
      } else {
        removeFromCart(cartItemId);
      }
    } catch (error) {
      toast.error('Failed to update cart');
      console.error('Error updating cart:', error);
    }
  };

  // Helper to get the cart item id for a product, including variants
  const getCartItemId = (product: Product, sizeIdx?: number, flavorIdx?: number) => {
    const hasSizes = product.variants && product.variants.sizes && product.variants.sizes.length > 0;
    const hasFlavors = product.variants && product.variants.flavors && product.variants.flavors.length > 0;
    const size = hasSizes ? product.variants!.sizes![sizeIdx ?? 0] : null;
    const flavor = hasFlavors ? product.variants!.flavors![flavorIdx ?? 0] : null;
    const idParts = [product.id];
    if (hasSizes && size) idParts.push(size.value);
    if (hasFlavors && flavor) idParts.push(flavor.value);
    return idParts.join('-');
  };

  // Helper to get the quantity of a product in the cart, including variants
  const getItemQuantity = (product: Product, sizeIdx?: number, flavorIdx?: number) => {
    const cartItemId = getCartItemId(product, sizeIdx, flavorIdx);
    const item = items.find(item => item.id === cartItemId);
    return item ? item.quantity : 0;
  };

  // Helper for Add to Cart with variant, scoped to this product
  const handleAddToCartVariant = async (item: Product, sizeIdx?: number, flavorIdx?: number) => {
    if (!user) {
      const currentPath = window.location.pathname;
      toast.error('Please login to add items to cart');
      router.push(`/login?returnUrl=${encodeURIComponent(currentPath)}`);
      return;
    }

    const hasSizes = item.variants && item.variants.sizes && item.variants.sizes.length > 0;
    const hasFlavors = item.variants && item.variants.flavors && item.variants.flavors.length > 0;
    const size = hasSizes ? item.variants!.sizes![sizeIdx ?? 0] : null;
    const flavor = hasFlavors ? item.variants!.flavors![flavorIdx ?? 0] : null;

    const cartItem = {
      id: item.id,
      name: `${item.name}${size ? ` - ${size.name}` : ''}${flavor ? ` (${flavor.name})` : ''}`,
      price: size?.price || item.price,
      quantity: 1,
      vendor_id: 'whole-foods',
      description: item.description,
      category: 'Whole Foods',
      size: size?.value,
      flavor: flavor?.value,
      image: item.images?.[0] || item.image
    };

    try {
      addToCart(cartItem);
      toast.success(`${cartItem.name} added to cart!`);
      // Update selectedVariants so UI shows + and - for this variant
      setSelectedVariants(prev => ({
        ...prev,
        [item.id]: { sizeIdx: sizeIdx ?? 0, flavorIdx: flavorIdx ?? 0 }
      }));
    } catch (error) {
      toast.error('Failed to add item to cart');
      console.error('Error adding to cart:', error);
    }
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
          
          // Get variant state for this product, defaulting to first options
          const variantState = selectedVariants[product.id] || { sizeIdx: 0, flavorIdx: 0 };
          const { sizeIdx, flavorIdx } = variantState;
          
          const selectedSize = hasSizes ? product.variants!.sizes![sizeIdx] : null;
          const selectedFlavor = hasFlavors ? product.variants!.flavors![flavorIdx] : null;
          const displayPrice = hasSizes && selectedSize ? selectedSize.price : product.price;
          const quantity = getItemQuantity(product, sizeIdx, flavorIdx);

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
                  {/* Display size information */}
                  <p className="text-sm text-gray-500 mb-2">
                    {product.size ? `Size: ${product.size}` : ''}
                  </p>
                  {/* Variant selectors for sizes and flavors */}
                  {(hasSizes || hasFlavors) && (
                    <div className={`mb-2 flex ${hasSizes && hasFlavors ? 'gap-2' : ''}`}>
                      {hasSizes && (
                        <select
                          className="w-full border rounded px-2 py-1 text-sm"
                          value={sizeIdx}
                          onChange={e => {
                            setSelectedVariants(prev => ({
                              ...prev,
                              [product.id]: {
                                sizeIdx: Number(e.target.value),
                                flavorIdx: prev[product.id]?.flavorIdx ?? 0
                              }
                            }));
                          }}
                        >
                          <option value="">Choose a {product.name.toLowerCase().includes('cashew') ? 'variety' : 'size'}</option>
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
                          value={flavorIdx}
                          onChange={e => {
                            setSelectedVariants(prev => ({
                              ...prev,
                              [product.id]: {
                                sizeIdx: prev[product.id]?.sizeIdx ?? 0,
                                flavorIdx: Number(e.target.value)
                              }
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
                    {quantity > 0 ? (
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
                        <span className="mx-2 text-sm font-medium">{quantity}</span>
                        <button
                          onClick={async (e) => {
                            e.preventDefault();
                            if (hasSizes || hasFlavors) {
                              await handleAddToCartVariant(product, sizeIdx, flavorIdx);
                            } else {
                              await handleAddToCart(product);
                            }
                          }}
                          className="bg-white text-gray-800 w-6 h-6 rounded-md flex items-center justify-center shadow-sm hover:bg-gray-50"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={async (e) => {
                          e.preventDefault();
                          if (hasSizes || hasFlavors) {
                            await handleAddToCartVariant(product, sizeIdx, flavorIdx);
                          } else {
                            await handleAddToCart(product);
                          }
                        }}
                        className="bg-black text-white w-auto min-w-0 px-2 py-1 rounded-md hover:bg-gray-800 transition-colors text-xs font-medium ml-2"
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