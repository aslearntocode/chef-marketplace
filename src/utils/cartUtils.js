export const addToCart = (item) => {
  const currentCart = JSON.parse(localStorage.getItem('cartItems')) || [];
  
  const existingItemIndex = currentCart.findIndex(cartItem => cartItem.id === item.id);
  
  if (existingItemIndex >= 0) {
    currentCart[existingItemIndex].quantity += 1;
  } else {
    currentCart.push({ ...item, quantity: 1 });
  }
  
  localStorage.setItem('cartItems', JSON.stringify(currentCart));
};

export const updateQuantity = (itemId, newQuantity) => {
  if (newQuantity < 1) return;
  
  const currentCart = JSON.parse(localStorage.getItem('cartItems')) || [];
  const updatedCart = currentCart.map(item => 
    item.id === itemId ? { ...item, quantity: newQuantity } : item
  );
  
  localStorage.setItem('cartItems', JSON.stringify(updatedCart));
};

export const removeFromCart = (itemId) => {
  const currentCart = JSON.parse(localStorage.getItem('cartItems')) || [];
  const updatedCart = currentCart.filter(item => item.id !== itemId);
  
  localStorage.setItem('cartItems', JSON.stringify(updatedCart));
}; 