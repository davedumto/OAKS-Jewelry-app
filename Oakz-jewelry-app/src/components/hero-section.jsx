import React from "react";
import neckstand from "/images/neckstand 2.svg";
import splatter from "/images/splatter 2.svg";
import heroDisplay1 from "/images/hero display 1.png";
import heroDisplay2 from "/images/hero display 2.png";
import heroDisplay3 from "/images/hero display 3.png";
import heroDisplay4 from "/images/hero display 4.png";
import heroDisplay5 from "/images/hero display 5.png";
import "./hero.css";
import Navbar from "./navbar";
import HeroImages from "./HeroImages"; // Importing the HeroImages component

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
          <div className=" relative w-full h-full flex  items-center">
            <img
              src={splatter}
              alt=""
              className="max-w-[80%] mx-auto max-h-[80%] object-cover "
            /> 
            <img
              src={neckstand}
              alt=""
              className=" absolute inset-0 mx-auto my-auto max-w-[70%] max-h-[70%] "
            />
          </div>
        </div>

        {/* Using the HeroImages component to display hero images */}
        <HeroImages
          images={[heroDisplay1, heroDisplay2, heroDisplay3, heroDisplay4]}
        />
      </div>
    </div>
  );
}

export default Hero;