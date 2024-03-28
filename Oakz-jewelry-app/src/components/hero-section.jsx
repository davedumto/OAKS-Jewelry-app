import React from "react";
import  neckstand from "./../../public/images/neckstand 2.svg"
import splatter from "./../../public/images/splatter 2.svg"

function Hero () {
    return(
        <div className="  p-4 bg-beige ">
        <div className="flex justify-between bg-orange-300 rounded-xl p-7 ">
            <div >
                <h1 className="w-">Match Up!
                    The best outfits are the ones
                    with fitting Jewellery!</h1>
                </div>
                <div className="relative">
                   
                    <img src={neckstand} alt="my-4" />
                    
                </div>
            </div>
            
        
       
        </div>
    )
}
export default Hero;