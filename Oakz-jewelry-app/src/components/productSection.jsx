import React from "react";
import products from "../data/productList";

const ProductSection = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1 className="text-3xl ">Dorn yourself with our best sellers!</h1>
        <h2>It is our goal to make sure you look good for that occassion</h2>
      </div>

      <div>
        {" "}
        <ul className="text-red-400 flex gap-3">
          {products.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductSection;
