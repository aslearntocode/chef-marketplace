'use client';

import { useState, use, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { products } from '@/data/whole-foods';
import { Product } from '@/types/whole-foods';
import { FiChevronDown, FiChevronUp, FiChevronLeft, FiChevronRight, FiX, FiZoomIn, FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import ProductRating from '@/components/ProductRating';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

interface VariantOption {
  name: string;
  price?: number;
  description?: string;
  value: string;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params);
  const product = products.find(p => p.id === id);
  const { user } = useAuth();
  const router = useRouter();
  const { addToCart, updateQuantity, removeFromCart, items } = useCart();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedSize, setSelectedSize] = useState<VariantOption | null>(null);
  const [selectedFlavor, setSelectedFlavor] = useState<VariantOption | null>(null);
  const [quantity, setQuantity] = useState(0);

  const getCurrentImages = () => {
    if (!product) return ['/images/placeholder.png'];
    if (product.images?.length) return product.images;
    if (product.image) return [product.image];
    return ['/images/placeholder.png'];
  };

  const images = getCurrentImages();

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    );
  }

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const size = product.variants?.sizes?.find(s => s.name === e.target.value);
    setSelectedSize(size || null);
    setCurrentImageIndex(0);
  };

  const handleFlavorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const flavor = product.variants?.flavors?.find(f => f.name === e.target.value);
    setSelectedFlavor(flavor || null);
    setCurrentImageIndex(0);
  };

  const getCartItemId = () => {
    const idParts = [product.id];
    if (selectedSize) idParts.push(selectedSize.value);
    if (selectedFlavor) idParts.push(selectedFlavor.value);
    return idParts.join('-');
  };

  const getCartQuantity = () => {
    const cartItemId = getCartItemId();
    const item = items.find(item => item.id === cartItemId);
    return item ? item.quantity : 0;
  };

  useEffect(() => {
    setQuantity(getCartQuantity());
  }, [selectedSize, selectedFlavor, items]);

  const handleAddToCart = async () => {
    if (!user) {
      const currentPath = window.location.pathname;
      toast.error('Please login to add items to cart');
      router.push(`/login?returnUrl=${encodeURIComponent(currentPath)}`);
      return;
    }

    const cartItem = {
      id: getCartItemId(),
      name: product.name,
      price: selectedSize?.price || product.price,
      quantity: 1,
      vendor_id: 'healthier-treats',
      description: product.description,
      category: product.category,
      image: images[0]
    };

    try {
      addToCart(cartItem);
      toast.success(`${product.name} added to cart!`);
    } catch (error) {
      toast.error('Failed to add item to cart');
      console.error('Error adding to cart:', error);
    }
  };

  const handleIncrement = async () => {
    if (!user) {
      const currentPath = window.location.pathname;
      toast.error('Please login to add items to cart');
      router.push(`/login?returnUrl=${encodeURIComponent(currentPath)}`);
      return;
    }

    const cartItemId = getCartItemId();
    const currentQuantity = getCartQuantity();
    
    if (currentQuantity === 0) {
      await handleAddToCart();
    } else {
      updateQuantity(cartItemId, currentQuantity + 1);
    }
  };

  const handleDecrement = async () => {
    if (!user) return;
    
    const cartItemId = getCartItemId();
    const currentQuantity = getCartQuantity();
    
    if (currentQuantity > 1) {
      updateQuantity(cartItemId, currentQuantity - 1);
    } else if (currentQuantity === 1) {
      removeFromCart(cartItemId);
    }
  };

  const handleImageNav = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex(current => current === 0 ? images.length - 1 : current - 1);
    } else {
      setCurrentImageIndex(current => current === images.length - 1 ? 0 : current + 1);
    }
  };

  const handleImageClick = () => {
    setIsZoomModalOpen(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <main className="mt-[72px] min-h-screen bg-[#FDBE28]">
      <div className="max-w-7xl mx-auto px-4 md:scale-90 md:origin-top">
        {/* Mobile Back Button */}
        <div className="md:hidden py-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-[#8B4513] hover:text-[#6B3410] bg-white rounded-full px-4 py-2 shadow-sm transition-colors"
          >
            <FiArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Image Gallery */}
            <div className="relative">
              <div 
                className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden cursor-zoom-in group"
                onClick={handleImageClick}
              >
                <Image
                  src={images[currentImageIndex]}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity">
                  <FiZoomIn className="text-[#8B4513] opacity-0 group-hover:opacity-100 transform scale-150" />
                </div>
              </div>

              {/* Image Navigation */}
              {images.length > 1 && (
                <div className="mt-4 flex items-center justify-center gap-4">
                  <button
                    onClick={() => handleImageNav('prev')}
                    className="p-2 rounded-full bg-[#FDBE28] hover:bg-[#FDBE28]/80 text-[#8B4513]"
                  >
                    <FiChevronLeft />
                  </button>
                  <div className="flex gap-2">
                    {images.map((_, index: number) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          currentImageIndex === index ? 'bg-[#8B4513]' : 'bg-[#FDBE28]/50'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => handleImageNav('next')}
                    className="p-2 rounded-full bg-[#FDBE28] hover:bg-[#FDBE28]/80 text-[#8B4513]"
                  >
                    <FiChevronRight />
                  </button>
                </div>
              )}
            </div>

            {/* Right Column - Product Details */}
            <div className="flex flex-col">
              <div className="mb-6">
                <p className="text-sm text-[#8B4513] mb-2">{product.category}</p>
                <h1 className="text-3xl font-bold text-[#8B4513] mb-4">{product.name}</h1>
                <div className="flex items-baseline gap-4">
                  <p className="text-2xl font-bold text-[#8B4513]">₹{selectedSize?.price || product.price}</p>
                  {(!selectedSize && product.price < 499) || (selectedSize?.price && selectedSize.price < 499) ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      Introductory Offer
                    </span>
                  ) : null}
                </div>
                {/* Display size information */}
                <p className="text-sm text-gray-600 mt-2">
                  {selectedSize ? `Size: ${selectedSize.name}` : (product.size ? `Size: ${product.size}` : '')}
                </p>
                
                {/* Product Rating */}
                <div className="mt-4">
                  <ProductRating 
                    productId={product.id}
                    showRatingInput={false}
                    showDetailedBreakdown={true}
                  />
                </div>
              </div>

              {/* Variant Selectors */}
              {product.variants && (
                <div className="mb-6 space-y-4">
                  {/* Size Dropdown */}
                  {product.variants.sizes && (
                    <div>
                      <label htmlFor="size-select" className="block text-sm font-medium text-gray-900 mb-2">
                        {product.name.toLowerCase().includes('cashew') ? 'Select Variety' : 'Select Size'}
                      </label>
                      <select
                        id="size-select"
                        value={selectedSize?.name || ''}
                        onChange={handleSizeChange}
                        className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black"
                      >
                        <option value="">Choose a {product.name.toLowerCase().includes('cashew') ? 'variety' : 'size'}</option>
                        {product.variants.sizes.map((size) => (
                          <option key={size.name} value={size.name}>
                            {size.name} - ₹{size.price}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Flavor Dropdown */}
                  {product.variants.flavors && (
                    <div>
                      <label htmlFor="flavor-select" className="block text-sm font-medium text-gray-900 mb-2">
                        Select Flavor
                      </label>
                      <select
                        id="flavor-select"
                        value={selectedFlavor?.name || ''}
                        onChange={handleFlavorChange}
                        className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black"
                      >
                        <option value="">Choose a flavor</option>
                        {product.variants.flavors.map((flavor) => (
                          <option key={flavor.name} value={flavor.name}>
                            {flavor.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              )}





              {/* Expandable Sections */}
              <div className="space-y-4 mb-8">
                {/* Product Description Section */}
                <div className="border rounded-lg">
                  <button
                    onClick={() => toggleSection('description')}
                    className="flex items-center justify-between w-full p-4 text-left"
                  >
                    <span className="font-medium">Product Description</span>
                    {openSection === 'description' ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                  {openSection === 'description' && (
                    <div className="px-4 pb-4 space-y-4">
                      {/* Main Description */}
                      <div>
                        <h4 className="font-medium mb-2 text-gray-800">Description:</h4>
                        <p className="text-gray-600">
                          {product.description.split('•')[0].trim()}
                        </p>
                      </div>

                      {/* Additional Sections */}
                      {product.description.includes('•') && (
                        <div className="space-y-3 border-t pt-4">
                          {product.description
                            .split('•')
                            .slice(1)
                            .map((section, index) => {
                              if (section.trim()) {
                                const [title, content] = section.split(':');
                                return (
                                  <div key={index}>
                                    <h4 className="font-medium text-gray-800">{title?.trim() || ''}:</h4>
                                    <p className="text-gray-600">{content?.trim() || ''}</p>
                                  </div>
                                );
                              }
                              return null;
                            })}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Product Ingredients & Benefits Section */}
                <div className="border rounded-lg">
                  <button
                    onClick={() => toggleSection('ingredients')}
                    className="flex items-center justify-between w-full p-4 text-left"
                  >
                    <span className="font-medium">Product Ingredients & Benefits</span>
                    {openSection === 'ingredients' ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                  {openSection === 'ingredients' && (
                    <div className="px-4 pb-4">
                      {product.ingredients_benefits && Object.keys(product.ingredients_benefits).length > 0 ? (
                        <div className="space-y-4">
                          <div>
                            <ol className="list-decimal list-inside text-gray-600 space-y-1 font-bold">
                              {Object.entries(product.ingredients_benefits).map(([ingredient, benefits], index) => (
                                <li key={index}>
                                  <span className="font-bold">{ingredient}</span>
                                  {benefits && benefits.length > 0 && (
                                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 font-normal">
                                      {benefits.map((benefit, bIndex) => (
                                        <li key={bIndex}>{benefit}</li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-600">Ingredients and benefits information not available</p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Add to Cart Button or Quantity Selector */}
              <div className="mt-auto">
                {quantity > 0 ? (
                  <div className="flex items-center justify-between w-full bg-gray-100 rounded-lg p-2">
                    <button
                      onClick={handleDecrement}
                      className="px-4 py-2 bg-gray-200 rounded-l-lg text-lg font-bold hover:bg-gray-300"
                    >
                      −
                    </button>
                    <span className="px-4 text-lg font-semibold">{quantity}</span>
                    <button
                      onClick={handleIncrement}
                      className="px-4 py-2 bg-gray-200 rounded-r-lg text-lg font-bold hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleAddToCart}
                    className="w-full max-w-xs mx-auto bg-black text-white px-3 py-3 rounded-lg hover:bg-gray-800 transition-colors text-base sm:w-auto sm:mx-0"
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {isZoomModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setIsZoomModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-20 bg-black bg-opacity-50 rounded-full p-2"
            >
              <FiX className="w-6 h-6" />
            </button>

            {/* Left Navigation Arrow */}
            {images.length > 1 && (
              <button
                onClick={() => handleImageNav('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-20 bg-black bg-opacity-50 rounded-full p-3"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Right Navigation Arrow */}
            {images.length > 1 && (
              <button
                onClick={() => handleImageNav('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-20 bg-black bg-opacity-50 rounded-full p-3"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Image Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={images[currentImageIndex]}
                alt={product.name}
                width={800}
                height={800}
                className="object-contain max-w-full max-h-full rounded-lg"
                priority
              />
            </div>

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 rounded-full px-4 py-2 text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
} 