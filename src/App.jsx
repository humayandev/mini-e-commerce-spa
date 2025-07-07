import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage'; // new import
import CheckoutPage from './pages/CheckoutPage';

const App = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
