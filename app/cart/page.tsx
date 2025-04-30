'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalAmount, clearCart } = useCart();
  const DELIVERY_FEE = 100;
  const FREE_DELIVERY_THRESHOLD = 1000;
  const isDeliveryFree = totalAmount >= FREE_DELIVERY_THRESHOLD;

  // Get the chef/baker name of the first item in cart (if any)
  const currentVendor = items.length > 0 ? (items[0].bakerName || items[0].chefName || '') : '';

  // Function to check if item is from same vendor
  const isFromSameVendor = (itemVendor: string) => {
    return !currentVendor || currentVendor === itemVendor;
  };

  // Modified updateQuantity to check vendor
  const handleUpdateQuantity = (itemId: string, newQuantity: number, itemVendor: string | undefined) => {
    // If no vendor is provided, skip the check
    if (!itemVendor) return;

    if (!isFromSameVendor(itemVendor)) {
      if (confirm(
        'Each order can only contain items from one chef/baker. Would you like to clear your current cart and start a new order?'
      )) {
        clearCart();
        // If user confirms, update with new item
        if (newQuantity > 0) {
          updateQuantity(itemId, newQuantity);
        }
      }
      return;
    }
    updateQuantity(itemId, newQuantity);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-xl text-gray-600">Your cart is empty</p>
        <Link
          href="/"
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 pt-[100px]">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {items.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6 mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-600">
                    {item.bakerName || item.chefName}
                  </p>
                </div>
                <p className="text-lg font-semibold">₹{item.price}</p>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleUpdateQuantity(
                      item.id, 
                      Math.max(0, item.quantity - 1),
                      item.bakerName || item.chefName || ''  // Provide empty string as fallback
                    )}
                    className="px-3 py-1 border rounded-md"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => handleUpdateQuantity(
                      item.id, 
                      item.quantity + 1,
                      item.bakerName || item.chefName || ''  // Provide empty string as fallback
                    )}
                    className="px-3 py-1 border rounded-md"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{totalAmount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Delivery Fee</span>
                <div className="text-right">
                  {isDeliveryFree ? (
                    <>
                      <span className="line-through text-gray-400 mr-2">₹{DELIVERY_FEE}</span>
                      <span className="text-green-600">Free</span>
                    </>
                  ) : (
                    <span>₹{DELIVERY_FEE}</span>
                  )}
                </div>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₹{totalAmount + (isDeliveryFree ? 0 : DELIVERY_FEE)}</span>
                </div>
              </div>
            </div>
            <Link href="/checkout" className="block w-full">
              <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}