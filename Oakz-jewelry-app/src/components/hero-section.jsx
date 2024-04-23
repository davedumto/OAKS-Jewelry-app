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
    <div className="hero-section bg-beige p-4 h-[1024px]">
        <div className="bg-brownish rounded-xl py-10 px-[150px] h-[979px]">
      <Navbar/>

      <div className="sub-hero flex flex-col md:flex-row justify-between  items-center">
        <div className="mb-4 md:mb-0 w-full">
          <div className="items-center">
            <h1 className="text-[52px] i">Match Up! <br /> The best outfits are the ones <br /> with fitting <span className="text-orange-400">Jewelry</span>!</h1>
            <div>
              <button className="bg-green text-white w-[140px] h-[60px] rounded-full mt-10">Place Order</button>
            </div>
          </div>
        </div>
        <div className="relative w-full md:w-auto">
          <img src={neckstand} alt="" className="z-20 absolute px-7 pt-9 mt-12" />
          <img src={splatter} alt="" className="z-10 top-0 left-0 w-auto" />
        </div>
      </div>
      <div className="flex inline-block gap-[80px]  pt-[120px] pb-9  ">
        <span><img src={heroDisplay1} alt="" className="rounded-xl border-4 border-orange-400 " /></span>
        <span><img src={heroDisplay2} alt="" className="rounded-xl border-4 border-orange-400"/></span>
        <span><img src={heroDisplay3} alt="" className="rounded-xl border-4 border-orange-400"/></span>
        <span><img src={heroDisplay4} alt="" className="rounded-xl border-4 border-orange-400"/></span>
        <span><img src={heroDisplay5} alt="" className="rounded-xl "/></span>
        
      </div>
      </div>
    </div>
  );
}

export default Hero;
