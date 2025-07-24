'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { QRCodeCanvas } from 'qrcode.react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useAuth } from '@/context/AuthContext';

export default function CheckoutPage() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const { items, totalAmount, clearCart } = useCart();
  const { user } = useAuth();
  const DELIVERY_FEE = 100;
  const FREE_DELIVERY_THRESHOLD = 1000;
  const isDeliveryFree = totalAmount >= FREE_DELIVERY_THRESHOLD;
  const finalAmount = totalAmount + (isDeliveryFree ? 0 : DELIVERY_FEE);
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [street, setStreet] = useState('');
  const [apartment, setApartment] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        if (user?.uid) {
          await supabase.auth.signInWithPassword({
            email: user.email || '',
            password: user.uid
          });
        }
      }
    };

    checkAuth();
  }, [user, supabase.auth]);

  // Function to fetch city and state from PIN code
  const handlePinCodeChange = async (pin: string) => {
    setPinCode(pin);
    if (pin.length === 6) {
      try {
        const response = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
        const [data] = await response.json();
        if (data.Status === "Success") {
          setCity(data.PostOffice[0].District);
          setState(data.PostOffice[0].State);
        }
      } catch (error) {
        console.error('Error fetching address details:', error);
      }
    }
  };

  // Update QR code value with final amount and your UPI ID
  const qrValue = `upi://pay?pa=akanshamehrotra29-2@okaxis&pn=Homechef&am=${finalAmount}&cu=INR`;

  const handlePlaceOrder = async () => {
    setIsLoading(true);
    try {
      if (!user?.uid) {
        throw new Error('Please login to place order');
      }

      // Validate required fields first
      if (!name || !mobileNumber || !pinCode || !street || !apartment) {
        alert('Please fill all required fields');
        return;
      }

      // Check if items exist
      if (!items || items.length === 0) {
        throw new Error('Your cart is empty');
      }

      // Get the first item's vendor_id since all items in an order are from the same vendor
      const vendor_id = items[0]?.vendor_id;
      
      console.log('Creating order with vendor_id:', vendor_id);

      // Get vendor name from the first item
      const vendorName = items[0]?.chefName || items[0]?.bakerName || 'Unknown Vendor';

      const orderData = {
        user_id: user.uid,
        items: items.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          chefName: item.chefName || null,
          vendor_id: vendor_id
        })),
        total_amount: totalAmount,
        status: 'success',
        delivery_address: {
          name: name,
          mobile: mobileNumber,
          pin_code: pinCode,
          city,
          state,
          street,
          apartment
        },
        vendor_id: vendor_id,
        vendor_name: vendorName,
        created_at: new Date().toISOString(),
      };

      console.log('Creating order with data:', orderData);

      // Create order in Supabase
      const { data, error: orderError } = await supabase
        .from('orders')
        .insert(orderData)
        .select()
        .single();

      if (orderError) {
        console.error('Supabase error details:', orderError);
        throw new Error(`Failed to create order: ${orderError.message}`);
      }

      // Format items for email
      const itemsList = items
        .map(item => `${item.name} × ${item.quantity} - ₹${item.price * item.quantity}`)
        .join('\n');

      // Send email notification using formsubmit.co with x-www-form-urlencoded
      try {
        await fetch('https://formsubmit.co/thedivinehands3@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            _subject: `New Order #${data.id}`,
            name: `Order #${data.id}`,
            message: `
              New Order Details:
              
              Order ID: ${data.id}
              Customer Name: ${name}
              Vendor: ${vendorName}
              Date: ${new Date().toLocaleDateString()}
              Total Amount: ₹${totalAmount}
              
              Items:
              ${itemsList}
              
              Delivery Address:
              ${name}
              ${apartment}
              ${street}
              ${city}, ${state}
              PIN: ${pinCode}
              Mobile: ${mobileNumber}
            `,
            _template: 'box',
            _captcha: 'false',
            _next: window.location.origin + '/checkout/success'
          }).toString()
        });
        console.log('Email notification sent');
      } catch (emailError) {
        // Log the error but don't throw it since the order was successful
        console.log('Email notification failed to send:', emailError);
      }

      // Clear cart and redirect to success page
      clearCart();
      router.push('/checkout/success');
    } catch (error) {
      console.error('Error placing order:', error);
      if (error instanceof Error) {
        alert(`Failed to place order: ${error.message}`);
      } else {
        alert('Failed to place order. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact Information Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-black focus:border-black"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-black focus:border-black"
                placeholder="Enter your mobile number"
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                  PIN Code
                </label>
                <input
                  type="text"
                  id="pincode"
                  value={pinCode}
                  onChange={(e) => handlePinCodeChange(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:ring-black focus:border-black"
                  placeholder="Enter PIN code"
                  pattern="[0-9]{6}"
                  maxLength={6}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={city}
                    readOnly
                    className="w-full px-4 py-2 border rounded-md bg-gray-50"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    value={state}
                    readOnly
                    className="w-full px-4 py-2 border rounded-md bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="apartment" className="block text-sm font-medium text-gray-700 mb-1">
                  Apartment/Building Name
                </label>
                <input
                  type="text"
                  id="apartment"
                  value={apartment}
                  onChange={(e) => setApartment(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:ring-black focus:border-black"
                  placeholder="Enter apartment or building name"
                  required
                />
              </div>

              <div>
                <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address
                </label>
                <textarea
                  id="street"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:ring-black focus:border-black"
                  placeholder="Enter street address"
                  rows={2}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>₹{totalAmount}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Delivery Fee</span>
                {isDeliveryFree ? (
                  <span className="text-green-600">Free</span>
                ) : (
                  <span>₹{DELIVERY_FEE}</span>
                )}
              </div>
              <div className="flex justify-between font-semibold text-lg pt-2">
                <span>Total</span>
                <span>₹{finalAmount}</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <QRCodeCanvas value={qrValue} size={256} />
              </div>
              <p className="mt-4 text-gray-600">
                Scan this QR code to make payment of ₹{finalAmount}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add Place Order button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={handlePlaceOrder}
          disabled={isLoading}
          className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Placing Order...' : 'Place Order'}
        </button>
      </div>
    </main>
  );
} 