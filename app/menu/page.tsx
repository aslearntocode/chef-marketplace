'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestoreDb } from '@/lib/firebase';

interface MenuItem {
  id: string;
  item_name: string;
  description: string;
  price: number;
  category: string;
  availability: string;
  timestamp: string;
}

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const menuCollection = collection(firestoreDb, 'menu');
        const menuSnapshot = await getDocs(menuCollection);
        
        const items = menuSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as MenuItem[];

        // Sort by timestamp
        items.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        
        setMenuItems(items);
      } catch (err) {
        console.error('Error fetching menu:', err);
        setError('Failed to load menu items');
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Menu</h1>
      
      {/* Category filters */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {Array.from(new Set(menuItems.map(item => item.category))).map(category => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div 
            key={item.id}
            className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold">{item.item_name}</h3>
              <span className={`px-2 py-1 rounded-full text-sm ${
                item.availability?.toLowerCase() === 'available' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {item.availability}
              </span>
            </div>
            <p className="text-gray-600 mt-2">{item.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-lg font-bold">₹{item.price}</p>
              <span className="text-sm text-gray-500">{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}