import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productList from "../data/productList";
import productItems from "../data/productItem";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import MyModal from "./MyModal";


const ProductSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);


  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalIsOpen(false);
  };


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let numItems;
  if (windowWidth < 768) {
    numItems = 4;
  } else if (windowWidth < 1024) {
    numItems = 6;
  } else if (windowWidth < 1280) {
    numItems = 8;
  } else {
    numItems = 10;
  }

  return (
    <div className="flex flex-col w-full px-[2em] md:px-[4em] py-[4em] ">

        <MyModal isOpen={modalIsOpen} onRequestClose={closeModal} product={selectedProduct}/>
    
      <div className="flex gap-[0.3em] md:flex-col w-full mb-[2em] md:mb-0">
        <div className="flex flex-col  md:w-full items-start">
          <h1 className="text-[2em] md:text-[3em] ">
            <span className="text-orange-400 ">Dorn</span> yourself with our
            best sellers!
          </h1>
          <h2 className="text-[1em] md:text-[2em]">
            It is our goal to make sure you look good for that occassion
          </h2>
        </div>

        <div className="flex justify-center  items-end md:py-[2em] ">
          <select
            className="text-white flex md:hidden border-[0.1875em]  h-fit border-brownbg rounded-[2em] bg-brownbg"
            onChange={(e) => handleSelectChange(e.target.value)}
          >
            {productList.map((product, index) => (
              <option className="text-[0.7em]" value={product} key={index}>
                {product}
              </option>
            ))}
          </select>

          <ul className="hidden text-red-400 md:flex justify-around border-[0.1875em] border-brownbg p-[0.625em] rounded-[2em] bg-beige w-fit">
            {productList.map((product, index) => (
              <li
                className="text-[1em] cursor-pointer text-black active:bg-brownbg active:text-white active:rounded-[2em] py-2 md:px-[1em] lg:px-[1.5em] focus:bg-brownbg focus:text-white focus:rounded-[2em] hover:bg-brownbg duration-200 hover:text-white hover:rounded-[2em]"
                key={index}
                onClick={() => handleListItemClick(product)}
                
              >
                {product}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid justify-center  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {productItems.slice(0, numItems).map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-beige w-full h-fit "
          >
            <img
              src={product.imgSrc.Gold}
              alt={product.name}
              className="object-contain w-full h-auto "
            />

            <div className="flex flex-col w-full justify-around h-[50%] px-2">
              <div className="flex flex-col my-[0.5em] md:mt-[1.5em] md:mb-[2.5em] md:flex-row gap-[0.2em] justify-between w-full">
                <p className="text-[1em]">{product.name}</p>

                <p
                  className={
                    product.stock === "IN STOCK"
                      ? "bg-brownbg flex items-center text-white text-[0.625em] rounded-2xl p-1 w-fit"
                      : "bg-tomatoRed flex items-center text-white text-[0.5em] rounded-2xl p-1 w-fit"
                  }
                >
                  {product.stock}
                </p>
              </div>
              <div className="flex justify-between w-full mb-[0.5em] font-normal">
                <p>NGN: {product.price}</p>

                {product.stock === "IN STOCK" ? (
                  <a>
                    <img
                      src="/images/add.svg"
                      className="h-[2em] cursor-pointer"
                      alt="in stock icon"
                      onClick={() => openModal(product)}
                    />
                  </a>
                ) : (
                  <img
                    src="/images/add.svg"
                    className="h-[2em] opacity-50 cursor-not-allowed"
                    alt=" in stock icon"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/searchproduct">
        <p className="flex justify-end py-2 text-[1.2em]">
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
