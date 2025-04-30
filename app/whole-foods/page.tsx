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
import { products } from '@/data/whole-foods';
import { Product } from '@/types/whole-foods';

// Define categories with their routes and images
const categories = [
  {
    id: 'healthy-treats',
    name: 'Healthy Treats',
    route: '/whole-foods/categories/healthy-treats',
    description: 'Delicious and nutritious treats made with natural ingredients'
  },
  {
    id: 'drinks',
    name: 'Drinks',
    route: '/whole-foods/categories/drinks',
    description: 'Refreshing and healthy beverages for every occasion'
  },
  {
    id: 'healthy-bites',
    name: 'Healthy Bites',
    route: '/whole-foods/categories/healthy-bites',
    description: 'Wholesome snacks perfect for any time of day'
  },
  {
    id: 'pickles',
    name: 'Pickles & Condiments',
    route: '/whole-foods/categories/pickles',
    description: 'Traditional pickles and chutneys made with authentic recipes'
  },
  {
    id: 'healthy-breakfast',
    name: 'Healthy Breakfast',
    route: '/whole-foods/categories/healthy-breakfast',
    description: 'Nutritious and convenient breakfast options to start your day right'
  },
  {
    id: 'spice-blends',
    name: 'Spice Blends',
    route: '/whole-foods/categories/spice-blends',
    description: 'Artisanal spice blends crafted with premium ingredients for authentic flavors'
  }
];

export default function WholeFoods() {
  const { user } = useAuth();
  const { addToCart, removeFromCart, items, updateQuantity, clearCart } = useCart();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});

  // Group products by category
  const productsByCategory = products.reduce<Record<string, Product[]>>((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  // Filter categories based on search
  const filteredCategories = categories.filter(category => {
    const searchLower = searchQuery.toLowerCase();
    const categoryProducts = productsByCategory[category.name] || [];
    
    return (
      category.name.toLowerCase().includes(searchLower) ||
      category.description.toLowerCase().includes(searchLower) ||
      categoryProducts.some(product => 
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchLower))
      )
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

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[72px] font-nunito">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Compact Header with Search */}
        <div className="flex flex-col items-center justify-center relative mb-8">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
            <p className="text-sm text-gray-600 mt-1">Discover our range of healthy and delicious products</p>
          </div>
          
          {/* Search Bar - Floating Design */}
          <div className="w-full max-w-xl relative">
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
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const categoryProducts = productsByCategory[category.name] || [];
            const previewProducts = categoryProducts.slice(0, 4);

            return (
              <Link
                key={category.id}
                href={category.route}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{category.name}</h2>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{category.description}</p>
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                      {categoryProducts.length} products
                    </span>
                  </div>

                  {/* Preview Grid */}
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    {previewProducts.map((product) => (
                      <div key={product.id} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                        <Image
                          src={product.image || '/images/placeholder.png'}
                          alt={product.name}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* No Results Message */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-600">No categories or products found matching your search.</p>
          </div>
        )}
      </div>
    </main>
  );
} 