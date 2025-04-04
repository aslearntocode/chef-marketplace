'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { toast } from 'react-hot-toast';
import { FiChevronLeft, FiChevronRight, FiX, FiZoomIn } from 'react-icons/fi';
import Link from 'next/link';

// Import products from data file and Product type from types file
import { products } from '../../../data/whole-foods';
import type { Product } from '../../../types/whole-foods';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params);
  const { user } = useAuth();
  const { addToCart, removeFromCart, items, updateQuantity } = useCart();
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);

  // Find the product by ID
  const product = products.find((p: Product) => p.id === id);

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    router.back();
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link href="/whole-foods" className="text-blue-600 hover:underline">
            Return to Whole Foods
          </Link>
        </div>
      </div>
    );
  }

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

  const handleRemoveFromCart = () => {
    if (!user) {
      const currentPath = window.location.pathname;
      toast.error('Please login to manage cart items');
      router.push(`/login?returnUrl=${encodeURIComponent(currentPath)}`);
      return;
    }
    
    const item = items.find(item => item.id === product.id);
    if (item && item.quantity > 1) {
      updateQuantity(product.id, item.quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  const getItemQuantity = () => {
    if (!user) return 0;
    const item = items.find(item => item.id === product.id);
    return item ? item.quantity : 0;
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
    <main className="relative mt-[72px]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back button */}
        <button 
          onClick={handleBack}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <FiChevronLeft className="mr-2" />
          Back to Whole Foods
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Image Gallery */}
            <div className="relative">
              <div 
                className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden w-1/2 mx-auto cursor-zoom-in group"
                onClick={handleImageClick}
              >
                {product.images ? (
                  <>
                    <Image
                      src={product.images[currentImageIndex]}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 50vw, 25vw"
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
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity">
                      <FiZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-150" />
                    </div>
                  </>
                )}
              </div>
              
              {/* Image Navigation */}
              {product.images && product.images.length > 1 && (
                <div className="mt-4 flex items-center justify-between w-1/2 mx-auto">
                  <button
                    onClick={() => handleImageNav('prev')}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    ←
                  </button>
                  <div className="flex gap-2">
                    {product.images.map((_: string, index: number) => (
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
                    →
                  </button>
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <div className="mb-4">
                <span className="text-sm font-medium text-gray-500">{product.category}</span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">{product.name}</h1>
                <p className="text-2xl font-bold text-gray-900 mt-2">₹{product.price}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Description</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <div className="mt-auto">
                {getItemQuantity() > 0 ? (
                  <div className="flex items-center bg-gray-100 rounded-lg p-2 w-fit">
                    <button
                      onClick={handleRemoveFromCart}
                      className="bg-white text-gray-800 w-8 h-8 rounded-md flex items-center justify-center shadow-sm hover:bg-gray-50"
                    >
                      -
                    </button>
                    <span className="mx-4 text-lg font-medium">{getItemQuantity()}</span>
                    <button
                      onClick={handleAddToCart}
                      className="bg-white text-gray-800 w-8 h-8 rounded-md flex items-center justify-center shadow-sm hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <FiX />
                    Add to Cart
                  </button>
                )}
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