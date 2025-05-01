import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [history, setHistory] = useState([]);

  function addToCart(product) {
    setCartItems(prev => [...prev, product]);
  }

  function checkout() {
    setHistory(prev => [...prev, ...cartItems]);
    setCartItems([]);
  }

  return (
    <CartContext.Provider value={{ cartItems, history, addToCart, checkout }}>
      {children}
    </CartContext.Provider>
  );
}
