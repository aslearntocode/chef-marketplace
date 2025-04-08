'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { products } from '@/data/whole-foods';
import { FiChevronDown, FiChevronUp, FiChevronLeft, FiChevronRight, FiX, FiZoomIn } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params);
  const product = products.find(p => p.id === id);
  const { user } = useAuth();
  const { addToCart } = useCart();
  const router = useRouter();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  const handleAddToCart = () => {
    if (!user) {
      const currentPath = window.location.pathname;
      toast.error('Please login to add items to cart');
      router.push(`/login?returnUrl=${encodeURIComponent(currentPath)}`);
      return;
    }

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      vendor_id: 'whole-foods',
      description: product.description,
      category: 'Whole Foods'
    };

    addToCart(cartItem);
    toast.success(`${product.name} added to cart!`);
  };

  const handleImageNav = (direction: 'prev' | 'next') => {
    if (!product.images) return;
    
    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev + 1) % product.images!.length);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + product.images!.length) % product.images!.length);
    }
  };

  const handleImageClick = () => {
    setIsZoomModalOpen(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - bounds.left) / bounds.width) * 100;
    const y = ((e.clientY - bounds.top) / bounds.height) * 100;
    
    setZoomPosition({ x, y });
  };

  return (
    <main className="mt-[72px] min-h-screen bg-[#FFC107] bg-opacity-10">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Image Gallery */}
            <div className="relative">
              <div 
                className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden cursor-zoom-in group"
                onClick={handleImageClick}
              >
                {product.images ? (
                  <>
                    <Image
                      src={product.images[currentImageIndex]}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity">
                      <FiZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-150" />
                    </div>
                  </>
                ) : (
                  <>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity">
                      <FiZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-150" />
                    </div>
                  </>
                )}
              </div>

              {/* Image Navigation */}
              {product.images && product.images.length > 1 && (
                <div className="mt-4 flex items-center justify-center gap-4">
                  <button
                    onClick={() => handleImageNav('prev')}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    <FiChevronLeft />
                  </button>
                  <div className="flex gap-2">
                    {product.images.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          currentImageIndex === index ? 'bg-black' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => handleImageNav('next')}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    <FiChevronRight />
                  </button>
                </div>
              )}
            </div>

            {/* Right Column - Product Details */}
            <div className="flex flex-col">
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <div className="flex items-baseline gap-4">
                  <p className="text-2xl font-bold">₹{product.price}</p>
                  {product.price < 499 && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      Introductory Offer
                    </span>
                  )}
                </div>
              </div>

              {/* Expandable Sections */}
              <div className="space-y-4 mb-8">
                {/* Size Section */}
                <div className="border rounded-lg">
                  <button
                    onClick={() => toggleSection('size')}
                    className="flex items-center justify-between w-full p-4 text-left"
                  >
                    <span className="font-medium">Size</span>
                    {openSection === 'size' ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                  {openSection === 'size' && (
                    <div className="px-4 pb-4 text-gray-600">
                      {product.size || 'Size information not available'}
                    </div>
                  )}
                </div>

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
                                    <h4 className="font-medium text-gray-800">{title.trim()}:</h4>
                                    <p className="text-gray-600">{content.trim()}</p>
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
                      {(product.ingredients && product.ingredients.length > 0) || (product.benefits && product.benefits.length > 0) ? (
                        <div className="space-y-4">
                          {product.ingredients && product.ingredients.length > 0 && (
                            <div>
                              <h4 className="font-medium mb-2">Ingredients:</h4>
                              <ul className="list-disc list-inside text-gray-600 space-y-1">
                                {product.ingredients.map((ingredient, index) => (
                                  <li key={index}>{ingredient}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {product.benefits && product.benefits.length > 0 && (
                            <div>
                              <h4 className="font-medium mb-2">Benefits:</h4>
                              <ul className="list-disc list-inside text-gray-600 space-y-1">
                                {product.benefits.map((benefit, index) => (
                                  <li key={index}>{benefit}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ) : (
                        <p className="text-gray-600">Ingredients and benefits information not available</p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="mt-auto">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {isZoomModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <button
              onClick={() => {
                setIsZoomModalOpen(false);
                setIsZoomed(false);
              }}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <FiX size={24} />
            </button>
            
            <div 
              className={`relative ${isZoomed ? 'cursor-move' : 'cursor-zoom-in'} w-full max-w-3xl mx-auto`}
              onClick={() => setIsZoomed(!isZoomed)}
              onMouseMove={handleMouseMove}
            >
              <div className="relative aspect-square bg-white rounded-lg">
                <Image
                  src={product.images ? product.images[currentImageIndex] : product.image}
                  alt={product.name}
                  fill
                  className={`
                    object-contain p-4 transition-transform duration-200
                    ${isZoomed ? 'scale-150' : 'scale-100'}
                  `}
                  style={isZoomed ? {
                    transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
                  } : undefined}
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
              </div>
            </div>

            {product.images && product.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleImageNav('prev');
                  }}
                  className="p-2 rounded-full bg-white text-black hover:bg-gray-200"
                >
                  <FiChevronLeft size={20} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleImageNav('next');
                  }}
                  className="p-2 rounded-full bg-white text-black hover:bg-gray-200"
                >
                  <FiChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
} 