import React from "react";
import OAKZ_WHITE from "/images/OAKZ_white.svg";
import ArrowRoundedBack from "/images/mingcute.svg";
import { LocalGroceryStoreOutlined, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="flex flex-col gap-[2em] px-[2em] md:px-[3em]">
      <div>
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
        <div className="flex justify-between items-center bg-beige md:gap-[5em] p-3">
          <p className="text-[1em] md:text-[1.5em] leading-[0] font-normal">
            Checkout
          </p>
          <div className="md:flex-1"> </div>
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
      </div>
      <div className="flex gap-[2em] w-full justify-between">
        <div className="shadow-2xl">
          <p>Your Items are</p>
          <ul>
            <li>
              {" "}
              <span>Golden Necklace</span>
              <span>x2</span>
              <span>50,000.00</span>
            </li>
            <li>
              {" "}
              <span>Slim Silver Necklace</span>
              <span>x4</span>
              <span>48,000.00</span>
            </li>
          </ul>
          <hr />
          <p>
            Total <span>98,000.00</span>
          </p>
        </div>
        <div className="flex shadow-2xl flex-1 gap-[0.5em] justify-between  ">
          <div className="flex flex-col justify-between">
            <p>Input your details for identification</p>
            <button className="w-full bg-[#172D13]">Confirm details</button>
          </div>
          <div className="w-[1px] h-80% bg-black"></div>
          <div>
            <p>Transfer to the account bellow </p>
            <div>
              <ul>
                <li className="flex justify-between">
                  <span>Account Name:</span>
                  <span>OKAZ Stores</span>
                </li>
                <li className="flex justify-between">
                  <span>Account Number:</span> <span>12345678</span>
                </li>
                <li className="flex justify-between">
                  <span>Bank Name:</span>
                  <span>MoniePoint</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
