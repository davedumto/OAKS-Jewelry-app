import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productList from "../data/productList";
import productItems from "../data/productItem";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const ProductSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update window width state
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener to update width when window is resized
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Calculate the number of items to display based on screen width
  let numItems;
  if (windowWidth < 768) {
    numItems = 4;
  } else if (windowWidth < 1024) {
    numItems = 8;
  } else {
    numItems = 10;
  }

  return (
    <div className="flex flex-col w-full px-[48px] md:px-[64px] py-[64px] ">
      <div className="flex md:flex-col w-full mb-[2em] md:mb-0">
        <div className="flex flex-col w-[70%] items-start">
          <h1 className="text-[32px] md:text-[48px] ">
            <span className="text-orange-400 ">Dorn</span> yourself with our
            best sellers!
          </h1>
          <h2 className="text-[16px] md:text-[32px]">
            It is our goal to make sure you look good for that occassion
          </h2>
        </div>

        <div className="flex justify-center items-end md:py-[32px]">
          {/*
    Conditional rendering based on screen size.
    Show dropdown on mobile and mini tablet devices (< 768px).
  */}
          {window.innerWidth < 768 ? (
            <select
              className="text-white border-[3px] h-fit border-[#D76F30] p-[1px] rounded-[32px] bg-[#D76F30] md:w-[200px]"
              onChange={(e) => handleSelectChange(e.target.value)}
            >
              {productList.map((product, index) => (
                <option className="" value={product} key={index}>
                  {product}
                </option>
              ))}
            </select>
          ) : (
            <ul className="text-red-400 flex justify-around border-[3px] border-[#D76F30] p-[10px] rounded-[32px] bg-[#EFEFD0] w-[690px]">
              {productList.map((product, index) => (
                <li
                  className="text-[16px] cursor-pointer text-black active:bg-[#D76F30] active:text-white active:rounded-[32px] p-2 focus:bg-[#D76F30] focus:text-white focus:rounded-[32px] hover:bg-[#D76F30] hover:text-white hover:rounded-[32px]"
                  key={index}
                  onClick={() => handleListItemClick(product)}
                >
                  {product}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="grid justify-center  grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {productItems.slice(0, numItems).map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[#EFEFD0] w-full h-fit "
          >
            <img
              src={product.imgSrc}
              alt={product.name}
              className="object-contain w-full h-auto "
            />

            <div className="flex flex-col w-full justify-around h-[50%] px-2">
              <div className="flex flex-col my-[0.5em] md:mt-[1.5em] md:mb-[2.5em] md:flex-row gap-[0.2em] justify-between w-full">
                <p className="text-[14px]">{product.name}</p>

                <p
                  className={
                    product.stock === "IN STOCK"
                      ? "bg-[#D76F30] text-white text-[10px] rounded-2xl p-1 w-fit"
                      : "bg-[#BB2929] text-white text-[8px] rounded-2xl p-1 w-fit"
                  }
                >
                  {product.stock}
                </p>
              </div>
              <div className="flex justify-between w-full mb-[0.5em]">
                <p>NGN: {product.price}</p>

                {product.stock === "IN STOCK" ? (
                  <a href="">
                    <img src="/images/add.svg" className="h-[32px]" alt="" />
                  </a>
                ) : (
                  <img
                    src="/images/add.svg"
                    className="h-[32px] opacity-50 cursor-not-allowed"
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/searchproduct">
        <p className="flex justify-end">
          see more{" "}
          <span>
            <ArrowRight />
          </span>
        </p>
      </Link>
    </div>
  );
};

export default ProductSection;
