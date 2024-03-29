import { useState } from "react";

import viteLogo from "/vite.svg";
import "./App.css";
import ProductSection from "./components/productSection";
import Hero from "./components/hero-section"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href=""></a>
        <Hero/>
        <ProductSection />
      </div>
    </>
  );
}

export default App;
