'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  chefId?: string;
  chefName?: string;
  bakerId?: string;
  bakerName?: string;
  category?: string;
  description?: string;
  vendor_id: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string | number) => void;
  updateQuantity: (itemId: string, newQuantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalAmount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Get current vendor from cart items
  const getCurrentVendor = () => {
    if (items.length === 0) return '';
    return items[0].bakerName || items[0].chefName || '';
  };

  // Check if item is from same vendor
  const isFromSameVendor = (itemVendor: string | undefined) => {
    const currentVendor = getCurrentVendor();
    return !currentVendor || currentVendor === (itemVendor || '');
  };

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (item: CartItem) => {
    const itemVendor = item.bakerName || item.chefName || '';
    
    if (!isFromSameVendor(itemVendor)) {
      const confirmed = window.confirm(
        'Each order can only contain items from one chef/baker. Would you like to clear your current cart and start a new order?'
      );
      
      if (confirmed) {
        setItems([{ ...item, quantity: 1 }]);
      }
      return;
    }

    setItems(currentItems => {
      const existingItem = currentItems.find(i => i.id === item.id);
      if (existingItem) {
        return currentItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...currentItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string | number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, newQuantity: number) => {
    setItems(currentItems => {
      if (newQuantity <= 0) {
        return currentItems.filter(item => item.id !== itemId);
      }
      return currentItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const clearCart = () => {
    setItems([]);
    localStorage.setItem('cartItems', JSON.stringify([]));
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalAmount,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 