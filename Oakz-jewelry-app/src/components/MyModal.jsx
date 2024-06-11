import React, { useState, useEffect } from "react";
import { useCart } from "../CartContext"; // Adjust the path as needed
import Modal from "react-modal";
import { CancelOutlined } from "@mui/icons-material";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import addition from "./../../public/images/addition.svg";
import subtract from "./../../public/images/subtract.svg";
import "./MyModal.css";

Modal.setAppElement("#root");

const MyModal = ({ isOpen, onRequestClose, product }) => {
  const { cartItems, addToCart, removeFromCart, updateCart } = useCart();
  const [quantity, setQuantity] = useState(0);

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

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Product Details"
      style={{
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
          width: "40%",
          height: "80%",
          borderRadius: "20px",
        },
      }}
    >
      <div className="flex gap-2">
        <div className="w-1/3">
          <img
            src={product.imgSrc}
            alt={product.name}
            className="object-cover w-[12rem] h-[14rem] mb-4"
          />
          <p>{product.description}</p>
        </div>
        <div className="flex w-2/3 flex-col gap-4">
          <div className="w-full flex justify-between">
            <h2 className="text-2xl mb-2">{product.name}</h2>
            <div className="flex justify-start items-start">
              <button onClick={onRequestClose}>
                <CancelOutlined />
              </button>
            </div>
          </div>
          <div className="flex gap-2 justify-between">
            <div>
              <p className={`text-sm mb-4 ${product.stock === "IN STOCK" ? "text-green-600" : "text-red-600"}`}>
                {product.stock}
              </p>
              <p className="text-lg mb-2">NGN: {product.price}</p>
            </div>
            <div className="flex gap-4 flex-col">
              <p className="bg-[#BB2929] text-[1em] py-[1px] px-[3px] text-white">PROMO 35% OFF</p>
              <div className="flex flex-col gap-2">
                <button className="bg-[#172D13] text-[1em] py-[3px] px-[6px] w-full text-white rounded-2xl border-[1px] border-white">
                  Buy now
                </button>
                {quantity === 0 ? (
                  <button
                    className="bg-white text-[1em] py-[3px] px-[6px] text-black rounded-2xl border-[1px] border-green"
                    onClick={handleAddToCart}
                  >
                    Add to cart
                  </button>
                ) : (
                  <div className="flex items-center justify-around">
                    <img src={subtract} alt="decrease" onClick={handleDecrement} />
                    QTY: {quantity}
                    <img src={addition} alt="increase" onClick={handleIncrement} />
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
