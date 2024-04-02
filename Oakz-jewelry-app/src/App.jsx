import { useState } from "react";

import viteLogo from "/vite.svg";
import "./App.css";
import ProductSection from "./components/productSection";
import Hero from "./components/hero-section"
import Footer from "./components/footer";
import Choose from "./components/choose";
function App() {

  return (
    <>
      <div>
        <a href=""></a>
        <Hero/>
        <ProductSection />
        <Choose/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
