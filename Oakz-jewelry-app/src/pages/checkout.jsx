import React, { useState } from "react";
import OAKZ_WHITE from "/images/OAKZ_white.svg";
import ArrowRoundedBack from "/images/mingcute.svg";
import {
  AddCircleOutline,
  LocalGroceryStoreOutlined,
  Search,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import fields from "../data/fields";

const Checkout = () => {
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (
        selectedFile.type === "application/pdf" ||
        selectedFile.type.startsWith("image/")
      ) {
        setFile(selectedFile);
      } else {
        alert("Please upload either an image file or a PDF.");
      }
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-[2em] px-[2em] py-[1.5em] md:px-[3em] h-screen">
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
        <div className="flex gap-[2em] w-full justify-between flex-1">
          <div className="flex flex-col shadow-2xl p-[1em] w-[35%] h-full">
            <div className="flex flex-col flex-1">
              <p className="text-[2em] font-normal">Your Items are</p>
              <ul className="text-[1em] flex-1">
                <li className="flex  justify-between">
                  {" "}
                  <span>Golden Necklace</span>
                  <span>x2</span>
                  <span>50,000.00</span>
                </li>
                <li className="flex  justify-between">
                  {" "}
                  <span>Slim Silver Necklace</span>
                  <span>x4</span>
                  <span>48,000.00</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col ">
              <hr />
              <p className="flex w-full justify-end">
                Total: <span> 98,000.00</span>
              </p>
            </div>
          </div>
          <div className="flex shadow-2xl flex-1 gap-[0.5em] justify-between  ">
            <div className="flex flex-col justify-between flex-1 pt-[2em]  pb-[4em] ">
              <div className="flex flex-col gap-[1em] border-r-[1px] border-black px-[1.5em] ">
                {" "}
                <p className="text-[2em] leading-9 ">
                  Input your details for identification
                </p>
                <div className="flex flex-col w-full gap-[0.4em]">
                  {fields.map((field, index) => (
                    <div
                      key={index}
                      className="w-full border-[1px] rounded-lg border-black p-2"
                    >
                      <p>{field.label}</p>
                      <input
                        className="w-full"
                        type="text"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                  <button className="w-full bg-[#172D13] mt-[0.5em] text-white p-2 rounded-lg cursor-pointer">
                    Confirm details
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-1 px-[1.5em] pt-[2em]  pb-[4em] ">
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
              <div className="text-center">
                <div className="mb-4">
                  <label htmlFor="file-upload" className="cursor-pointer block">
                    <div className="flex border-2 border-dashed border-gray-300 p-4 rounded-lg w-64 mx-auto">
                      <div className="border-[1px] border-black rounded-[50%] ">
                        {file && (
                          <p className="text-gray-700 w-[2em] overflow-hidden overflow-ellipsis whitespace-nowrap p-1">
                            {file.name}
                          </p>
                        )}
                      </div>{" "}
                      <div className="text-gray-b ">
                        <AddCircleOutline className="text-2xl"/>
                      </div>
                    </div>
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*,.pdf"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>

                <p className="text-sm text-gray-500">Upload proof of payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
