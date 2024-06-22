import React, { useState, useEffect } from "react";
import { useCart } from "../CartContext"; // Adjust the path as needed
import Modal from "react-modal";
import { CancelOutlined } from "@mui/icons-material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import addition from "./../../public/images/addition.svg";
import subtract from "./../../public/images/subtract.svg";

import "./MyModal.css";

Modal.setAppElement("#root");

const MyModal = ({ isOpen, onRequestClose, product }) => {
  const { cartItems, addToCart, removeFromCart, updateCart } = useCart();
  const [quantity, setQuantity] = useState(0);

  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");
  useEffect(() => {
    if (product) {
      const cartItem = cartItems.find((item) => item.id === product.id);
      setQuantity(cartItem ? cartItem.quantity : 0);
    }
  }, [product, cartItems]);

  const handleAddToCart = () => {
    addToCart(product, 1);
    setQuantity(1);
    toast.success("Cart updated successfully!");
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCart(product.id, newQuantity);
    toast.success("Cart updated successfully!");
  };

  const handleDecrement = () => {
    const newQuantity = quantity - 1;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
      updateCart(product.id, newQuantity);
      toast.success("Cart updated successfully!");
    } else {
      setQuantity(0);
      removeFromCart(product.id);
      toast.success("Item removed from cart!");
    }
  };

  if (!product) return null;

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "10px",
      width: "90%",
      maxWidth: "40rem",
      height: "auto",
      maxHeight: "80%",
      borderRadius: "20px",
      overflowY: "auto",
    },
  };

  const responsiveStyles = `
    @media (min-width: 768px) {
      .ReactModal__Content {
        width: 40% !important;
      }
    }
    @media (max-width: 768px) {
      .ReactModal__Content {
        width: 90% !important;
      }
    }
  `;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Product Details"
      style={customStyles}
    >
      <style>{responsiveStyles}</style>
      <div className="flex flex-col md:flex-row gap-4 md:gap-2">
        <div className="flex flex-col w-full md:w-1/3">
          <div className="flex justify-between items-start md:hidden mb-4">
            <h2 className="text-xl md:text-2xl">{product.name}</h2>
            <button onClick={onRequestClose}>
              <CancelOutlined />
            </button>
          </div>
          <div>
            <img
              src={product.imgSrc}
              alt={product.name}
              className="object-cover w-full h-48 md:w-[12rem] md:h-[14rem] mb-2 rounded-md"
            />
            <div>
              <ul className="flex justify-between">
              <li className="bg-orange-300 text-[0.7rem] text-white rounded-md py-1 px-3 cursor-pointer">
                  Gold
                </li>
                <li className="bg-zinc-400 text-[0.7rem] text-white rounded-md py-1 px-3 cursor-pointer">
                  Silver
                </li>
                <li className="bg-black text-[0.7rem] text-white rounded-md py-1 px-3 cursor-pointer">
                  Black
                </li>
              
              </ul>
            </div>
          </div>
          <p>{product.description}</p>
        </div>
        <div className="flex flex-col w-full md:w-2/3 gap-4">
          <div className="hidden md:flex justify-between">
            <h2 className="text-xl md:text-2xl mb-2">{product.name}</h2>
            <div className="flex justify-start items-start">
              <button onClick={onRequestClose}>
                <CancelOutlined />
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 justify-between">
            <div>
              <p
                className={`text-sm mb-4 ${
                  product.stock === "IN STOCK"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {product.stock}
              </p>
              <p className="text-lg mb-2">NGN: {product.price}</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="bg-[#BB2929] text-sm py-1 px-3 text-white">
                PROMO 35% OFF
              </p>
              <div className="flex flex-col gap-2">
                <button className="bg-[#172D13] text-sm py-1 px-2 w-full text-white rounded-xl border border-white">
                  Buy now
                </button>
                {quantity === 0 ? (
                  <button
                    className="bg-white text-sm py-1 px-2 text-black rounded-xl border border-green-600"
                    onClick={handleAddToCart}
                  >
                    Add to cart
                  </button>
                ) : (
                  <div className="flex items-center justify-around">
                    <img
                      src={subtract}
                      alt="decrease"
                      onClick={handleDecrement}
                      className="cursor-pointer"
                    />
                    QTY: {quantity}
                    <img
                      src={addition}
                      alt="increase"
                      onClick={handleIncrement}
                      className="cursor-pointer fill-black "
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MyModal;
