import React, { useContext } from 'react';
import { CartContext }     from '../contexts/CartContext';

export default function History() {
  const { history } = useContext(CartContext);

  if (history.length === 0) {
    return <p>No purchase history yet.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Purchase History</h2>
      <ul className="space-y-2">
        {history.map((item, idx) => (
          <li key={idx} className="flex justify-between">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
