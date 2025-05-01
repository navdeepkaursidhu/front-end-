import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

export default function Header() {
  const { cartItems } = useContext(CartContext);

  return (
    <header className="bg-sky-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Beauty Shop</Link>
        <ul className="flex space-x-4 items-center">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li>
            <Link to="/cart">
              Cart {cartItems.length > 0 && `(${cartItems.length})`}
            </Link>
          </li>
          <li><Link to="/checkout">Checkout</Link></li>
          <li><Link to="/history">History</Link></li>
        </ul>
      </nav>
    </header>
  );
}
