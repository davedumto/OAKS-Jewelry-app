import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import OAKZ_WHITE from "/images/OAKZ_white.svg";
import ArrowRoundedBack from "/images/mingcute.svg";
import FilterImage from "/images/Filter.svg";
import { LocalGroceryStoreOutlined, Search } from "@mui/icons-material";
import { productPriceFilters, productNameFilters } from "../data/productFilter";
import Footer from "./footer";
import productItems from "../data/productItem";

const SearchProduct = () => {
  const [nameFilters, setNameFilters] = useState(productNameFilters);
  const [priceFilters, setPriceFilters] = useState(productPriceFilters);

  const handleNameFilterChange = (id) => {
    setNameFilters(
      nameFilters.map((nameFilter) =>
        nameFilter.id === id
          ? { ...nameFilter, isChecked: !nameFilter.isChecked }
          : nameFilter
      )
    );
  };

  const handlePriceFilterChange = (id) => {
    setPriceFilters(
      priceFilters.map((priceFilter) =>
        priceFilter.id === id
          ? { ...priceFilter, isChecked: !priceFilter.isChecked }
          : priceFilter
      )
    );
  };
 

  return (
    <div>
      <div className=" px-[2em] md:px-[3em]">
        <header className="flex justify-between items-end mt-[1em] mb-[1em]">
          <img
            src={OAKZ_WHITE}
            alt=" logo icon"
            className="w-[6em] md:w-auto"
          />
          <div className="flex gap-[1em] items-center">
            <div className="md:hidden py-[0.125em] h-[2.125em]  flex-row gap-1 hover:cursor-text rounded-[3.125em] bg-transparent border-[1.5px] border-green focus-within:border-green focus-within:border active:border-green items-center relative">
              <input
                type="search"
                className=" text-sm active:border-2 focus:text-[#04020099]/90 focus:border-none outline-none bg-inherit h-full w-[2.5em] text-beige"
                placeholder=""
              />
              <div className="absolute inset-y-0  flex items-center">
                <div className="w-[1.875em]   cursor-pointer bg-green p-[2px] rounded-[3.125em] text-white">
                  <Search fontSize="medium" />
                </div>
              </div>
            </div>

            <LocalGroceryStoreOutlined />
          </div>
        </header>
        <div className="flex justify-between items-center bg-[#EFEFD0] md:gap-[5em] p-3">
          <p className="text-[1em] md:text-[1.5em] leading-[0] font-normal">
            Search Products
          </p>
          <div className="md:flex-1">
            {" "}
            <div className="hidden py-[2px] h-[2.125em] md:flex flex-1 flex-row gap-1 hover:cursor-text rounded-[3.125em] bg-transparent border-[1.5px] border-green focus-within:border-green focus-within:border active:border-green items-center">
              <input
                type="search"
                className="text-right py-1  text-sm w-full active:border-2 focus:text-[#04020099]/90 focus:border-none outline-none bg-inherit h-full  text-beige"
                placeholder="Get your favourite jewelry"
              />

              <div className="w-[1.875em] h-[1.875em]  cursor-pointer bg-green my-[1px] mx-[2px]  p-[2px] rounded-[3.125em] text-white">
                <Search fontSize="medium" />
              </div>
            </div>
          </div>
          <Link to="/">
            {" "}
            <div className="flex items-center justify-center gap-[0.2em] text-[1.5em] leading-[0] font-normal cursor-pointer">
              <img
                src={ArrowRoundedBack}
                alt="go back arrow icon"
                className="h-[0.9em] flex"
              />
              <p className="hidden md:inline-block"> Go&nbsp;Back</p>
            </div>
          </Link>
        </div>
        <div className="md:hidden flex gap-[1em] my-[1em] shadow-2xl">
          <p>Filter </p>
          <img src={FilterImage} alt="filter icon" />
        </div>
        <div className="flex  justify-between md:my-[2em] h-[48.625em] ">
          <div className="hidden md:flex flex-col md:w-[9.375em] lg:w-[13.75em]  px-[1em] shadow-2xl text-[1em] rounded-xl  ">
            <div className="pt-[1em]">
              <h2>Items</h2>
              <hr className="my-[0.5em]" />
              <ul id="items" className="leading-[1.8em]">
                {nameFilters.map((nameFilter) => (
                  <li key={nameFilter.id} className="flex gap-[0.2em]">
                    <input
                      type="checkbox"
                      id={nameFilter.name}
                      checked={nameFilter.isChecked}
                      onChange={() => handleNameFilterChange(nameFilter.id)}
                    />
                    <label htmlFor={nameFilter.name}>{nameFilter.name}</label>
                  </li>
                ))}
              </ul>
            </div>{" "}
            <div className="pt-[2em]">
              <h2>Price Ranges</h2>
              <hr className="my-[0.5em]" />
              <ul id="productFilter" className="leading-[1.8em]">
                {priceFilters.map((priceFilter) => (
                  <li key={priceFilter.id} className="flex gap-[0.2em]">
                    <input
                      type="checkbox"
                      id={priceFilter.price}
                      checked={priceFilter.isChecked}
                      onChange={() => handlePriceFilterChange(priceFilter.id)}
                    />
                    <label htmlFor={priceFilter.price}>
                      {priceFilter.price}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:w-[31.25em] lg:w-[44em] xl:w-[57.5em]  overflow-y-scroll">
            <div className="grid justify-center  grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 overflow-hidden px-[0.3em]">
              {productItems.map((product, index) => (
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
                    <div className="flex flex-col my-[0.5em] lg:mt-[1.5em] lg:mb-[2.5em] lg:flex-row gap-[0.2em] justify-between w-full">
                      <p className="text-[0.875em]">{product.name}</p>

                      <p
                        className={
                          product.stock === "IN STOCK"
                            ? "bg-[#D76F30] text-white text-[0.625em] rounded-2xl p-1 w-fit"
                            : "bg-[#BB2929] text-white text-[0.5em] rounded-2xl p-1 w-fit"
                        }
                      >
                        {product.stock}
                      </p>
                    </div>
                    <div className="flex justify-between w-full mb-[0.5em]">
                      <p>NGN: {product.price}</p>

                      {product.stock === "IN STOCK" ? (
                        <a href="">
                          <img
                            src="/images/add.svg"
                            className="h-[2em]"
                            alt="in stock icon"
                          />
                        </a>
                      ) : (
                        <img
                          src="/images/add.svg"
                          className="h-[2em] opacity-50 cursor-not-allowed"
                          alt="out of stock icon"
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchProduct;
