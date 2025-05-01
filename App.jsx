import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header        from './components/Header';
import Footer        from './components/Footer';
import Home          from './pages/Home';
import ProductList   from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart          from './pages/Cart';
import Checkout      from './pages/Checkout';
import History       from './pages/History';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/products"     element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart"         element={<Cart />} />
          <Route path="/checkout"     element={<Checkout />} />
          <Route path="/history"      element={<History />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
