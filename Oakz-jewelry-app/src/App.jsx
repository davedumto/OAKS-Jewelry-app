import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductSection from "./components/productSection";
import Hero from "./components/hero-section";
import Footer from "./components/footer";
import Choose from "./components/choose";
import SearchProduct from "./pages/searchProduct";
import Cart from "./pages/cart";

function App() {
  return (
    <Router>
      <div className="font-bienvenido">
        <a href=""></a>
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
