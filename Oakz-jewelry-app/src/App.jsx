// src/App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import ProductSection from "./components/productSection";
import { CartProvider } from "./CartContext";
import Hero from "./components/hero-section";
import Footer from "./components/footer";
import Choose from "./components/choose";
import SearchProduct from "./pages/searchProduct";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="font-bienvenido">
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <ProductSection />
                  <Choose />
                  <Footer />
                </>
              }
            />
            <Route path="/searchproduct" element={<SearchProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
