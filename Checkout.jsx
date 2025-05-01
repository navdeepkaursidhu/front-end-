import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

export default function Checkout() {
  const { cartItems, checkout } = useContext(CartContext);
  const navigate                = useNavigate();

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/products');
    } else {
      checkout();
      navigate('/history');
    }
  }, [cartItems, checkout, navigate]);

  return <p>Processing your order…</p>;
}
