'use client';

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useAuth } from '@/context/AuthContext';

interface Order {
  id: string;
  created_at: string;
  items: Array<{
    name: string;
    price: number;
    quantity: number;
  }>;
  total_amount: number;
  status: string;
  rating?: number;
  vendor_id?: string;
  vendor_name: string;
  delivery_address: {
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

  const handleRating = async (orderId: string, rating: number) => {
    try {
      console.log('Attempting to update rating:', { orderId, rating, userId: user?.uid });

      // First verify we can fetch the order
      const { data: orderCheck, error: checkError } = await supabase
        .from('orders')
        .select('*')
        .eq('id', orderId)
        .single();

      if (checkError) {
        console.error('Error checking order:', checkError);
        throw checkError;
      }

      console.log('Found order:', orderCheck);

      // Get the vendor_id from the order items
      const vendorId = orderCheck.items?.[0]?.chefId || 
                      orderCheck.items?.[0]?.bakerId || 
                      orderCheck.items?.[0]?.vendorId;

      // Update with rating and vendor_id
      const { data, error } = await supabase
        .from('orders')
        .update({ 
          rating,
          vendor_id: vendorId?.toString()
        })
        .eq('id', orderId)
        .select()
        .single();

      if (error) {
        console.error('Supabase update error:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        throw error;
      }
      
      console.log('Successfully updated rating:', data);

      if (data) {
        setOrders(orders.map(order => 
          order.id === orderId ? { ...order, rating } : order
        ));
      }
    } catch (error) {
      console.error('Error updating rating:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        name: error instanceof Error ? error.name : undefined,
        stack: error instanceof Error ? error.stack : undefined
      });
    }
  };

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
              <div className="space-y-2">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{item.name} × {item.quantity}</span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t mt-4 pt-4">
              <h3 className="font-semibold mb-2">Delivery Address</h3>
              <p className="text-gray-600">
                {order.delivery_address.apartment}<br />
                {order.delivery_address.street}<br />
                {order.delivery_address.city}, {order.delivery_address.state}<br />
                PIN: {order.delivery_address.pin_code}<br />
                Mobile: {order.delivery_address.mobile}
              </p>
            </div>

            <div className="border-t mt-4 pt-4">
              <h3 className="font-semibold mb-2">Rate Your Order</h3>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleRating(order.id, star)}
                    className={`text-2xl ${
                      order.rating && star <= order.rating
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  >
                    ★
                  </button>
                ))}
                {order.rating && (
                  <span className="text-sm text-gray-600 ml-2">
                    ({order.rating} stars)
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 