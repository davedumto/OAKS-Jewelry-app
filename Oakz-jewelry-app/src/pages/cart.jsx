import React from "react";
import Footer from "../components/footer";
import Oakz from "../../public/images/OAKZ(1).svg";
import LocalGroceryStoreTwoToneIcon from "@mui/icons-material/LocalGroceryStoreTwoTone";
import Return from "../../public/images/return-icon.svg";
import CartPage from "../components/cartpage";
import { useCart } from "../CartContext";

export default function Cart() {
  const { cartItems } = useCart(); // Access cartItems from CartContext
  console.log("Cart Items:", cartItems);
  return (
    <>
      <div className="h-screen py-[40px] px-[70px]">
        <div className="flex flex-col gap-[22px]">
          <div className="flex justify-between items-center">
            <img src={Oakz} alt="Oakz-logo" />
            <span>
              <LocalGroceryStoreTwoToneIcon fontSize="medium" />
            </span>
          </div>
          <div className="bg-beige py-3 px-8 flex justify-between items-center">
            <p className="font-bienvenido text-3xl leading-[37.44px]">Cart</p>
            <div className="flex gap-2 items-center">
              <span>
                <img src={Return} />
              </span>
              <span className="text-3xl leading-[37.44px] text-green font-bienvenido">
                Go back
              </span>
            </div>
          </div>
        </div>{" "}
        <div>
          {cartItems.map((item, index) => (
            <div key={index}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              {/* Add more fields as needed */}
            </div>
          ))}
        </div>
        <CartPage />
      </div>
      <Footer />
    </>
  );
}
