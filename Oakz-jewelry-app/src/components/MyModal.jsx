import React, { useState, useEffect } from "react";
import { useCart } from "../CartContext"; // Adjust the path as needed
import Modal from "react-modal";
import { CancelOutlined } from "@mui/icons-material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import addition from "/images/addition.svg";
import subtract from "/images/subtract.svg";
import "./MyModal.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

Modal.setAppElement("#root");

const MyModal = ({ isOpen, onRequestClose, product }) => {
  const { cartItems, addToCart, removeFromCart, updateCart } = useCart();
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Gold");
  const [selectedSize, setSelectedSize] = useState("M");
  const [currentImgSrc, setCurrentImgSrc] = useState(
    product ? product.imgSrc.Gold : ""
  );
  const navigate = useNavigate(); // Initialize useNavigate
  const handleColorChange = (color) => {
    setSelectedColor(color);
    setCurrentImgSrc(product.imgSrc[color]);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    if (product) {
      const cartItem = cartItems.find((item) => item.id === product.id);
      setQuantity(cartItem ? cartItem.quantity : 0);

      if (cartItem) {
        setSelectedColor(cartItem.color || "Gold");
        setSelectedSize(cartItem.size || "M");
        setCurrentImgSrc(product.imgSrc[cartItem.color || "Gold"]);
      } else {
        setSelectedColor("Gold");
        setSelectedSize("M");
        setCurrentImgSrc(product.imgSrc.Gold);
      }
    }
  }, [product, cartItems]);

  const handleAddToCart = () => {
    addToCart({ ...product, color: selectedColor, size: selectedSize }, 1);
    setQuantity(1);
    toast.success("Cart updated successfully!");
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCart(product.id, newQuantity, selectedColor, selectedSize);
    toast.success("Cart updated successfully!");
  };

  const handleDecrement = () => {
    const newQuantity = quantity - 1;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
      updateCart(product.id, newQuantity, selectedColor, selectedSize);
      toast.success("Cart updated successfully!");
    } else {
      setQuantity(0);
      removeFromCart(product.id);
      toast.success("Item removed from cart!");
    }
  };
  const handleBuyNow = () => {
    navigate("/checkout", {
      state: {
        cartItems: [{ ...product, color: selectedColor, size: selectedSize }],
        totalPrice: product.price * quantity,
      },
    });
  };

  if (!product) return null;

  const colorClasses = {
    Gold: "bg-orange-300",
    Silver: "bg-zinc-400",
    Black: "bg-black",
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Product Details"
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
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
      }}
    >
      <style>
        {`
        @media (min-width: 768px) {
          .ReactModal__Content {
            width: 45% !important;
          }
        }
        @media (max-width: 768px) {
          .ReactModal__Content {
            width: 90% !important;
          }
        }
      `}
      </style>
      <div className="flex flex-col md:flex-row gap-4 md:gap-2 p-2">
        <div className="flex flex-col w-full md:w-1/3">
          <div className="flex justify-between items-start md:hidden mb-4">
            <h2 className="text-xl md:text-2xl">{product.name}</h2>
            <button onClick={onRequestClose}>
              <CancelOutlined />
            </button>
          </div>
          <div>
            <img
              src={currentImgSrc}
              alt={product.name}
              className="object-cover w-full h-48 md:w-[12rem] md:h-[14rem] rounded-md"
            />
          </div>
          <p>{product.description}</p>
        </div>
        <div className="flex flex-col w-full md:w-2/3 gap-4 justify-between">
          <div className="hidden md:flex justify-between">
            <h2 className="text-xl md:text-2xl mb-2">{product.name}</h2>
            <div className="flex justify-start items-start">
              <button onClick={onRequestClose}>
                <CancelOutlined />
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 flex-1 h-full justify-between">
            <div className="flex flex-col gap-2 flex-1 justify-between">
              <p
                className={`text-sm ${
                  product.stock === "IN STOCK"
                    ? "bg-brownbg flex items-center text-white text-[0.625em] rounded-md p-1 w-fit"
                    : "text-red-600"
                }`}
              >
                {product.stock}
              </p>
              <div className="flex flex-col w-[90%] h-2/3 justify-between">
                <p className="text-lg">NGN: {product.price}</p>
                <div className="flex justify-between">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`${colorClasses[color]} text-[0.7rem] ${
                        selectedColor === color
                          ? "border-black border-[1px]"
                          : ""
                      } text-white rounded-md py-1 px-2 cursor-pointer`}
                      onClick={() => handleColorChange(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`text-[0.7rem] flex justify-center items-center border-[1px] ${
                        selectedSize === size
                          ? "border-black"
                          : "border-zinc-400"
                      } rounded-md py-1 px-3 cursor-pointer`}
                      onClick={() => handleSizeChange(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between flex-1">
              <p className="bg-[#BB2929] text-sm py-1 px-3 text-white">
                PROMO 35% OFF
              </p>
              <div className="flex flex-col gap-2">
                {quantity === 0 ? (
                  <button
                    className="bg-white text-sm py-1 px-2 text-black rounded-xl border border-zinc-400"
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
                      className="cursor-pointer fill-black"
                    />
                  </div>
                )}
                <button
                  className="bg-[#172D13] text-sm py-1 px-2 w-full text-white rounded-xl border border-white"
                  onClick={handleBuyNow}
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MyModal;
