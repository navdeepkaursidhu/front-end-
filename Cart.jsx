import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  const navigate      = useNavigate();

  if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  // Sum up the prices
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  const usdFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <ul className="space-y-2">
        {cartItems.map((item, i) => (
          <li key={i} className="flex justify-between">
            <span>{item.name}</span>
            <span>{usdFormatter.format(item.price)}</span>
          </li>
        ))}
      </ul>

      {/* Total line */}
      <div className="mt-4 text-xl font-bold">
        Total: {usdFormatter.format(total)}
      </div>

      <button
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
        onClick={() => navigate('/checkout')}
      >
        Checkout
      </button>
    </div>
  );
}
