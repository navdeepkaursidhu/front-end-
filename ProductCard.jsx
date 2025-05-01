import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="border p-4">
      <img src={product.imageURL} alt={product.name} className="w-full h-48 object-cover"/>
      <h3 className="font-bold mt-2">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
}