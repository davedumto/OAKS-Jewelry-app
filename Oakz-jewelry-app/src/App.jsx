import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductSection from "./components/productSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href=""></a>
        <ProductSection />
      </div>
    </>
  );
}

export default App;
