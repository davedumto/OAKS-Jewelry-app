import React from "react";

import productList from "../data/productList";
import productItems from "../data/productItem";

const ProductSection = () => {
  return (
    <div className="flex flex-col w-full px-[30px]">
      <div className="flex flex-col items-start">
        <h1 className="text-[48px] ">
          <span className="text-orange-400 ">Dorn</span> yourself with our best
          sellers!
        </h1>
        <h2 className="text-[32px]">
          It is our goal to make sure you look good for that occassion
        </h2>
      </div>

      <div className="flex justify-center py-[32px]">
        {" "}
        <ul className="text-red-400 flex  justify-around border-[3px] border-[#D76F30] p-[10px] px-[20px] rounded-[32px] bg-[#EFEFD0] w-[690px]">
          {productList.map((product, index) => (
            <li
              className="text-[16px] text-black active:bg-[#D76F30] active:text-white active:rounded-[32px] p-2 focus:bg-[#D76F30] focus:text-white focus:rounded-[32px] hover:bg-[#D76F30] hover:text-white hover:rounded-[32px]"
              key={index}
            >
              {product}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-5 gap-6 px-[64px] ">
        {productItems.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[#EFEFD0] h-[270px] w-full "
          >
            <img src={product.imgSrc} alt={product.name} className="w-full" />
            <div className="flex flex-col w-full justify-around h-[50%] px-2">
              <div className="flex justify-between w-full">
                <p className="text-[14px]">{product.name}</p>

                <p
                  className={
                    product.stock === "IN STOCK"
                      ? "bg-[#D76F30] text-white text-[10px] rounded-2xl p-1"
                      : "bg-[#BB2929] text-white text-[8px] rounded-2xl p-1"
                  }
                >
                  {product.stock}
                </p>
              </div>
              <div className="flex justify-between w-full">
                <p>NGN: {product.price}</p>

                <a href="">
                  <img src="/images/add.svg" className="h-[24px]" alt="" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
