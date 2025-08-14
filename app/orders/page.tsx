'use client';

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useAuth } from '@/context/AuthContext';
import ProductRating from '@/components/ProductRating';

interface Order {
  id: string;
  created_at: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
  total_amount: number;
  status: string;
  vendor_id?: string;
  vendor_name: string;
  delivery_address: {
    name: string;
    mobile: string;
    pin_code: string;
    city: string;
    state: string;
    street: string;
    apartment: string;
  };
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClientComponentClient();
  const { user } = useAuth();



  useEffect(() => {
    const fetchOrders = async () => {
      if (!user?.uid) {
        console.log('Waiting for Firebase user UID...');
        return;
      }
      
      try {
        const { data, error } = await supabase
          .from('orders')
          .select('*')
          .eq('user_id', user.uid)
          .order('created_at', { ascending: false });

        if (error) throw error;
        
        setOrders(data || []);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, [user?.uid, supabase]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading orders...</div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-xl text-gray-600">No orders found</p>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 mt-24">
      <h1 className="text-3xl font-bold mb-8">Your Orders</h1>
      
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-500">
                  Order ID: {order.id}
                </p>
                <p className="text-sm text-gray-500">
                  Date: {new Date(order.created_at).toLocaleDateString()}
                </p>
                <p className="text-sm font-medium text-gray-700">
                  Vendor: {order.vendor_name}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">₹{order.total_amount}</p>
                <span className={`inline-block px-2 py-1 text-sm rounded ${
                  order.status === 'completed' ? 'bg-green-100 text-green-800' :
                  order.status === 'success' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2">Items</h3>
              <div className="space-y-4">
                {order.items.map((item, index) => (
                  <div key={index} className="border rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium">{item.name} × {item.quantity}</span>
                      <span className="font-semibold">₹{item.price * item.quantity}</span>
                    </div>
                    {/* Product Rating */}
                    <ProductRating 
                      productId={item.id} 
                      orderId={order.id}
                      showRatingInput={true}
                      showDetailedBreakdown={false}
                      className="mt-2"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t mt-4 pt-4">
              <h3 className="font-semibold mb-2">Delivery Address</h3>
              <p className="text-gray-600">
                {order.delivery_address.name}<br />
                {order.delivery_address.apartment}<br />
                {order.delivery_address.street}<br />
                {order.delivery_address.city}, {order.delivery_address.state}<br />
                PIN: {order.delivery_address.pin_code}<br />
                Mobile: {order.delivery_address.mobile}
              </p>
            </div>


          </div>
        ))}
      </div>
    </main>
  );
} 