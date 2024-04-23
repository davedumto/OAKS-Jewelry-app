import React from "react";
import neckstand from "./../../public/images/neckstand 2.svg";
import splatter from "./../../public/images/splatter 2.svg";
import heroDisplay1 from "./../../public/images/hero display 1.png";
import heroDisplay2 from "./../../public/images/hero display 2.png";
import heroDisplay3 from "./../../public/images/hero display 3.png";
import heroDisplay4 from "./../../public/images/hero display 4.png";
import heroDisplay5 from "./../../public/images/hero display 5.png";
import "./hero.css";
import Navbar from "./navbar";

function Hero() {
  return (
    <div className="hero-section bg-beige p-4 ">
      {/* md:h-[1024px] */}
      <div className="bg-brownish rounded-xl px-[1em] md:px-[3em]">
        {/* py-10 px-[150px] h-[979px] */}
        <div>
          {" "}
          <Navbar />
        </div>

        <div className=" flex flex-col md:flex-row justify-between  items-center pt-[1em] ">
          <div className="text-center md:text-left font-normal flex flex-col justify-between w-full gap-[1em] md:gap-[2.5em]">
            <h1 className=" text-[28px] leading-[37.44px] md:leading-normal md:text-[30px] lg:text-[40px] xl:text-[52px] ">
              Match Up! <br /> The best outfits are the ones <br /> with fitting{" "}
              <span className="text-orange-400">Jewelry</span>!
            </h1>
            <div>
              <button className="bg-green text-white px-[2em] py-[0.6em] rounded-full ">
                Place Order
              </button>
            </div>
          </div>
          <div className=" relative w-full h-full flex justify-end items-center">
            <img
              src={splatter}
              alt=""
              className="max-w-[80%]  max-h-[80%] object-cover "
            />
            <img
              src={neckstand}
              alt=""
              className=" absolute inset-0 mx-auto my-auto max-w-[70%] max-h-[70%] "
            />
          </div>
        </div>
        <div className="hidden md:flex w-[80%] pt-[2em] pb-[4em] justify-between  ">
          <span>
            <img
              src={heroDisplay1}
              alt=""
              className="rounded-xl border-4 border-orange-400 "
            />
          </span>
          <span>
            <img
              src={heroDisplay2}
              alt=""
              className="rounded-xl border-4 border-orange-400"
            />
          </span>
          <span>
            <img
              src={heroDisplay3}
              alt=""
              className="rounded-xl border-4 border-orange-400"
            />
          </span>
          <span>
            <img
              src={heroDisplay4}
              alt=""
              className="rounded-xl border-4 border-orange-400"
            />
          </span>
          <span>
            <img
              src={heroDisplay5}
              alt=""
              className="rounded-xl border-4 border-black "
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
