'use client';

import { useState } from 'react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { FiSearch, FiX } from 'react-icons/fi';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images?: string[];  // Optional array of additional images
  category: string;
  tags: string[];  // Add tags array to the interface
}

const products: Product[] = [
  {
    id: '1',
    name: 'Coconut Barfi with Jaggery',
    description: 'Premium organic quinoa, high in protein and fiber. Perfect for healthy meals.',
    price: 299,
    image: '/images/Coconut Barfi With Jaggery.jpeg',
    category: 'Sweet',
    tags: ['sweet', 'dessert', 'coconut', 'jaggery', 'barfi', 'indian sweet']
  },
  {
    id: '2',
    name: 'Coconut Barfi with Sugar',
    description: 'Nutrient-rich chia seeds packed with omega-3 fatty acids and antioxidants.',
    price: 199,
    image: '/images/Coconut Barfi with Sugar.jpeg',
    category: 'Sweet',
    tags: ['sweet', 'dessert', 'coconut', 'sugar', 'barfi', 'indian sweet']
  },
  {
    id: '3',
    name: 'Sugar Free Dates and Peanut Ladoo',
    description: 'Fresh, raw almonds. Rich in healthy fats, protein, and vitamin E.',
    price: 399,
    image: '/images/SUGAR FREE DATES AND PEANUT LADDOO.jpeg',
    category: 'Nuts',
    tags: ['sugar free', 'healthy', 'dates', 'peanut', 'ladoo', 'indian sweet', 'nuts']
  },
  {
    id: '4',
    name: 'Sugar Free Dryfruits Ladoo',
    description: 'Pure, unprocessed organic honey. Natural sweetener with antibacterial properties.',
    price: 349,
    image: '/images/Sugar Free Dryfruits laddoo.jpeg',
    category: 'Sweet',
    tags: ['sugar free', 'healthy', 'dry fruits', 'ladoo', 'indian sweet']
  },
  {
    id: '5',
    name: 'Sugar Free Dryfruits Ladoo',
    description: 'Pure, unprocessed organic honey. Natural sweetener with antibacterial properties.',
    price: 349,
    image: '/images/Sugar Free Dryfruits laddoo.jpeg',
    category: 'Sweet',
    tags: ['sugar free', 'healthy', 'dry fruits', 'ladoo', 'indian sweet']
  },
  {
    id: '6',
    name: 'Paan-e-bahar',
    description: 'Refreshing yogurt-based drink made with fresh mangoes, perfect blend of sweet and tangy flavors.',
    price: 149,
    image: '/images/images-drinks/Paan-e-bahar/amazon-06.jpg',
    images: [
      '/images/images-drinks/Paan-e-bahar/amazon-06.jpg',
      '/images/images-drinks/Paan-e-bahar/amazon-07.jpg',
      '/images/images-drinks/Paan-e-bahar/amazon-09.jpg',
      '/images/images-drinks/Paan-e-bahar/amazon-10.jpg',
      '/images/images-drinks/Paan-e-bahar/amazon-21.jpg',
    ],
    category: 'Drinks',
    tags: ['drink', 'cold drink', 'refreshing', 'paan', 'summer drink', 'cooling', 'beverage','healthy drink']
  },
  {
    id: '7',
    name: 'Soothing Saffron',
    description: 'Aromatic and cooling yogurt drink infused with rose essence, garnished with rose petals.',
    price: 149,
    image: '/images/images-drinks/Soothing Sauf/amazon-11.jpg',
    images: [
      '/images/images-drinks/Soothing Sauf/amazon-11.jpg',
      '/images/images-drinks/Soothing Sauf/amazon-12.jpg',
      '/images/images-drinks/Soothing Sauf/amazon-14.jpg',
      '/images/images-drinks/Soothing Sauf/amazon-15.jpg',
      '/images/images-drinks/Soothing Sauf/amazon-21.jpg',
    ],
    category: 'Drinks',
    tags: ['drink', 'cold drink', 'refreshing', 'saffron', 'summer drink', 'cooling', 'beverage', 'kesar','healthy drink']
  },
  {
    id: '8',
    name: 'Thrilling Thandai',
    description: 'Luxurious yogurt drink flavored with premium saffron strands, rich and creamy texture.',
    price: 169,
    image: '/images/images-drinks/Thrilling Thandai/amazon-01.jpg',
    images: [
      '/images/images-drinks/Thrilling Thandai/amazon-01.jpg',
      '/images/images-drinks/Thrilling Thandai/amazon-02.jpg',
      '/images/images-drinks/Thrilling Thandai/amazon-04.jpg',
      '/images/images-drinks/Thrilling Thandai/amazon-05.jpg',
      '/images/images-drinks/Thrilling Thandai/amazon-21.jpg',
    ],
    category: 'Drinks',
    tags: ['drink', 'cold drink', 'refreshing', 'thandai', 'summer drink', 'cooling', 'beverage', 'traditional','healthy drink']
  }
];

export default function WholeFoods() {
  const { user } = useAuth();
  const { addToCart, removeFromCart, items, updateQuantity, clearCart } = useCart();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});
  const [modalImage, setModalImage] = useState<{ src: string; productName: string } | null>(null);

  const filteredProducts = products.filter(product => {
    const searchLower = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.category.toLowerCase().includes(searchLower) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchLower))
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
    <main className="relative">
      {/* Image Modal/Lightbox */}
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setModalImage(null)}
        >
          <button
            onClick={() => setModalImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
          >
            <FiX size={24} />
          </button>
          <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-lg overflow-hidden">
            <Image
              src={modalImage.src}
              alt={modalImage.productName}
              fill
              className="object-contain"
              sizes="(max-width: 1536px) 100vw, 1536px"
              priority
            />
          </div>
        </div>
      )}

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
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
                <div className="relative w-full pt-[100%] bg-[#f8f8f8] group">
                  {product.images ? (
                    <>
                      <Image
                        src={product.images[currentImageIndex[product.id] || 0]}
                        alt={product.name}
                        fill
                        className="object-contain p-4 cursor-pointer"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalImage({
                            src: product.images![currentImageIndex[product.id] || 0],
                            productName: product.name
                          });
                        }}
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
                            {product.images.map((_, index) => (
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
                      className="object-contain p-4 cursor-pointer"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      onClick={() => setModalImage({
                        src: product.image,
                        productName: product.name
                      })}
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