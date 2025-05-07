'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { useAuth } from './AuthContext';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  vendor_id: string;
  description?: string;
  category?: string;
  size?: string;
  flavor?: string;
  image?: string;
  bakerId?: string;
  bakerName?: string;
  chefId?: string;
  chefName?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, newQuantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalAmount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { user } = useAuth();

  // Helper: Generate consistent cart item ID
  const generateCartItemId = (item: CartItem) => {
    const idParts = [item.id];
    if (item.size) idParts.push(item.size);
    if (item.flavor) idParts.push(item.flavor);
    return idParts.join('-');
  };

  // Add to cart
  const addToCart = (item: CartItem) => {
    try {
      const cartItemId = generateCartItemId(item);
      setItems(prevItems => {
        const existingItem = prevItems.find(i => i.id === cartItemId);
        if (existingItem) {
          return prevItems.map(i =>
            i.id === cartItemId
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          );
        }
        return [...prevItems, { ...item, id: cartItemId }];
      });
    } catch (error) {
      console.error('Failed to add item to cart:', error);
      throw error;
    }
  };

  // Remove from cart
  const removeFromCart = (cartItemId: string) => {
    try {
      setItems(prevItems => prevItems.filter(item => item.id !== cartItemId));
    } catch (error) {
      console.error('Failed to remove item from cart:', error);
      throw error;
    }
  };

  // Update quantity
  const updateQuantity = (cartItemId: string, newQuantity: number) => {
    try {
      if (newQuantity <= 0) {
        removeFromCart(cartItemId);
      } else {
        setItems(prevItems =>
          prevItems.map(item =>
            item.id === cartItemId
              ? { ...item, quantity: newQuantity }
              : item
          )
        );
      }
    } catch (error) {
      console.error('Failed to update item quantity:', error);
      throw error;
    }
  };

  const clearCart = () => {
    setItems([]);
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