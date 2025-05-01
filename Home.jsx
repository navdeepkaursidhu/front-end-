import React from 'react';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Welcome to the eCommerce App!</h1>
      <p className="mt-4">Find the best beauty products here.</p>

      {/* Banner image below the text */}
      <img
        src="https://media.istockphoto.com/id/1546442230/photo/front-view-skin-care-products-on-wooden-decorative-piece.jpg?s=612x612&w=0&k=20&c=4qEsfqeNNAcrlzZOwMjs9mZzPBUf1ey22v0gSjt7NcY="
        alt="Beauty Collection Banner"
        className="mx-auto mt-6 rounded shadow-lg"
      />
    </div>
  );
}
