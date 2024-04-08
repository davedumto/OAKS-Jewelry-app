import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductSection from "./components/productSection";
import Hero from "./components/hero-section";
import Footer from "./components/footer";
import Choose from "./components/choose";
import SearchProduct from "./components/searchProduct";

function App() {
  return (
    <Router>
      <div>
        <a href=""></a>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ProductSection />
              <Choose />
              <Footer />
            </>
          }/>
          <Route path="/searchproduct" element={<SearchProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
