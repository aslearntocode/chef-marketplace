'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { QRCodeCanvas } from 'qrcode.react';

export default function CheckoutPage() {
  const { totalAmount } = useCart();
  const DELIVERY_FEE = 100;
  const FREE_DELIVERY_THRESHOLD = 1000;
  const isDeliveryFree = totalAmount >= FREE_DELIVERY_THRESHOLD;
  const finalAmount = totalAmount + (isDeliveryFree ? 0 : DELIVERY_FEE);
  const [mobileNumber, setMobileNumber] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [street, setStreet] = useState('');
  const [apartment, setApartment] = useState('');

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

  // Update QR code value with final amount
  const qrValue = `upi://pay?pa=your-upi-id@upi&pn=Your-Name&am=${finalAmount}&cu=INR`;

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact Information Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
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
    </main>
  );
} 