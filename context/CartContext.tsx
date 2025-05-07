'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useAuth } from './AuthContext';

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
  size?: string;
  flavor?: string;
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

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { user } = useAuth();
  const userId = user?.uid;

  // Helper: Upsert a cart item for the user
  const upsertCartItem = async (item: CartItem) => {
    if (!userId) {
      console.error('No user ID available');
      return;
    }

    try {
      // Validate required fields
      if (!item.id || !item.name || typeof item.price !== 'number' || typeof item.quantity !== 'number') {
        console.error('Invalid cart item data:', {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        });
        throw new Error('Invalid cart item data: missing required fields');
      }

      // First, check if the item already exists
      let existingQuery = supabase
        .from('cart_items')
        .select('*')
        .eq('user_id', userId)
        .eq('product_id', item.id);

      if (item.size == null) {
        existingQuery = existingQuery.is('size', null);
      } else {
        existingQuery = existingQuery.eq('size', item.size);
      }
      if (item.flavor == null) {
        existingQuery = existingQuery.is('flavor', null);
      } else {
        existingQuery = existingQuery.eq('flavor', item.flavor);
      }

      const { data: existingItem, error: fetchError } = await existingQuery.single();

      if (fetchError && fetchError.code !== 'PGRST116') { // PGRST116 is "no rows returned"
        console.error('Error checking existing cart item:', fetchError);
        throw fetchError;
      }

      if (existingItem) {
        // If item exists, update quantity
        const { error: updateError } = await supabase
          .from('cart_items')
          .update({ 
            quantity: existingItem.quantity + item.quantity,
            price: item.price, // Update price in case it changed
            updated_at: new Date().toISOString()
          })
          .eq('id', existingItem.id);

        if (updateError) {
          console.error('Error updating existing cart item:', updateError);
          throw updateError;
        }

        console.log('Updated existing cart item:', {
          itemId: existingItem.id,
          newQuantity: existingItem.quantity + item.quantity
        });
      } else {
        // If item doesn't exist, insert new item
        const cartItemData = {
          user_id: userId,
          product_id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          size: item.size || null,
          flavor: item.flavor || null,
          vendor_id: item.vendor_id || 'whole-foods',
          description: item.description || null,
          category: item.category || null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };

        console.log('Attempting to insert cart item with data:', cartItemData);

        const { data: insertedItem, error: insertError } = await supabase
          .from('cart_items')
          .insert([cartItemData])
          .select()
          .single();

        if (insertError) {
          console.error('Error inserting new cart item:', {
            error: insertError,
            errorMessage: insertError.message,
            errorDetails: insertError.details,
            errorHint: insertError.hint,
            errorCode: insertError.code
          });
          console.error('Cart item data that failed to insert:', cartItemData);
          throw insertError;
        }

        if (!insertedItem) {
          throw new Error('Failed to insert cart item: No data returned');
        }

        console.log('Successfully inserted cart item:', insertedItem);
      }
    } catch (error) {
      console.error('Failed to upsert cart item:', {
        error,
        errorMessage: error instanceof Error ? error.message : 'Unknown error',
        errorStack: error instanceof Error ? error.stack : undefined
      });
      throw error;
    }
  };

  // Helper: Fetch cart items for the user
  const fetchCartItems = async () => {
    if (!userId) {
      console.error('No user ID available');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('cart_items')
        .select('*')
        .eq('user_id', userId);

      if (error) {
        console.error('Error fetching cart items:', error);
        throw error;
      }

      setItems(data || []);
    } catch (error) {
      console.error('Failed to fetch cart items:', error);
      throw error;
    }
  };

  // Helper: Update cart item quantity
  const updateCartItemQuantity = async (cartItemId: string, newQuantity: number) => {
    if (!userId) {
      console.error('No user ID available');
      return;
    }

    try {
      const { error } = await supabase
        .from('cart_items')
        .update({ quantity: newQuantity })
        .eq('id', cartItemId)
        .eq('user_id', userId);

      if (error) {
        console.error('Error updating cart item quantity:', error);
        throw error;
      }
    } catch (error) {
      console.error('Failed to update cart item quantity:', error);
      throw error;
    }
  };

  // Helper: Remove cart item
  const removeCartItem = async (cartItemId: string) => {
    if (!userId) {
      console.error('No user ID available');
      return;
    }

    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', cartItemId)
        .eq('user_id', userId);

      if (error) {
        console.error('Error removing cart item:', error);
        throw error;
      }
    } catch (error) {
      console.error('Failed to remove cart item:', error);
      throw error;
    }
  };

  // On mount or user change, fetch cart items
  useEffect(() => {
    if (!userId) {
      setItems([]);
      return;
    }
    fetchCartItems().catch(console.error);
  }, [userId]);

  // Add to cart
  const addToCart = async (item: CartItem) => {
    if (!userId) {
      console.error('No user ID available');
      return;
    }

    try {
      // Validate input item
      if (!item || typeof item !== 'object') {
        console.error('Invalid item data:', item);
        throw new Error('Invalid item data: item must be an object');
      }

      // Create a properly structured cart item
      const cartItem: CartItem = {
        id: item.id,
        name: item.name,
        price: Number(item.price),
        quantity: Number(item.quantity),
        vendor_id: item.vendor_id || 'whole-foods',
        description: item.description || undefined,
        category: item.category || undefined,
        size: item.size || undefined,
        flavor: item.flavor || undefined
      };

      // First, check if the item already exists
      let existingQuery = supabase
        .from('cart_items')
        .select('*')
        .eq('user_id', userId)
        .eq('product_id', item.id);

      if (item.size == null) {
        existingQuery = existingQuery.is('size', null);
      } else {
        existingQuery = existingQuery.eq('size', item.size);
      }
      if (item.flavor == null) {
        existingQuery = existingQuery.is('flavor', null);
      } else {
        existingQuery = existingQuery.eq('flavor', item.flavor);
      }

      const { data: existingItem, error: fetchError } = await existingQuery.single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        console.error('Error checking existing cart item:', fetchError);
        throw fetchError;
      }

      if (existingItem) {
        // If item exists, update quantity in Supabase
        const { error: updateError } = await supabase
          .from('cart_items')
          .update({ 
            quantity: existingItem.quantity + cartItem.quantity,
            price: cartItem.price,
            updated_at: new Date().toISOString()
          })
          .eq('id', existingItem.id);

        if (updateError) {
          console.error('Error updating existing cart item:', updateError);
          throw updateError;
        }

        // Update local state
        setItems(prevItems => 
          prevItems.map(i =>
            i.id === existingItem.id &&
            (i.size ?? null) === (existingItem.size ?? null) &&
            (i.flavor ?? null) === (existingItem.flavor ?? null)
              ? { ...i, quantity: i.quantity + cartItem.quantity, price: cartItem.price }
              : i
          )
        );
      } else {
        // If item doesn't exist, insert new item in Supabase
        const cartItemData = {
          user_id: userId,
          product_id: cartItem.id,
          name: cartItem.name,
          price: Number(cartItem.price),
          quantity: Math.floor(cartItem.quantity),
          size: cartItem.size || null,
          flavor: cartItem.flavor || null,
          vendor_id: cartItem.vendor_id || 'whole-foods',
          description: cartItem.description || null,
          category: cartItem.category || null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };

        const { data: insertedItem, error: insertError } = await supabase
          .from('cart_items')
          .insert([cartItemData])
          .select()
          .single();

        if (insertError) {
          console.error('Error inserting new cart item:', insertError);
          throw insertError;
        }

        if (!insertedItem) {
          throw new Error('Failed to insert cart item: No data returned');
        }

        // Update local state with the inserted item
        setItems(prevItems => [...prevItems, {
          ...cartItem,
          user_id: userId,
          product_id: cartItem.id,
          vendor_id: cartItem.vendor_id || 'whole-foods',
          description: cartItem.description || undefined,
          category: cartItem.category || undefined,
          size: cartItem.size || undefined,
          flavor: cartItem.flavor || undefined,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }]);
      }
    } catch (error: any) {
      console.error('Failed to add item to cart:', error);
      throw error;
    }
  };

  // Remove from cart
  const removeFromCart = async (cartItemId: string) => {
    if (!userId) {
      console.error('No user ID available');
      return;
    }

    try {
      await removeCartItem(cartItemId);
      await fetchCartItems();
    } catch (error) {
      console.error('Failed to remove item from cart:', error);
      throw error;
    }
  };

  // Update quantity
  const updateQuantity = async (cartItemId: string, newQuantity: number) => {
    if (!userId) {
      console.error('No user ID available');
      return;
    }

    try {
      await updateCartItemQuantity(cartItemId, newQuantity);
      await fetchCartItems();
    } catch (error) {
      console.error('Failed to update item quantity:', error);
      throw error;
    }
  };

  const clearCart = async () => {
    if (!userId) {
      console.error('No user ID available');
      return;
    }

    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', userId);

      if (error) {
        console.error('Error clearing cart:', error);
        throw error;
      }

      setItems([]);
    } catch (error) {
      console.error('Failed to clear cart:', error);
      throw error;
    }
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