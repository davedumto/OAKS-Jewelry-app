// src/components/MyModal.js
import {
  AddOutlined,
  CancelOutlined,
  Minimize,
  MinimizeOutlined,
  MinimizeRounded,
} from "@mui/icons-material";
import React from "react";
import Modal from "react-modal";
import "./MyModal.css"

// Set the app element for accessibility reasons
Modal.setAppElement("#root");

const MyModal = ({ isOpen, onRequestClose, product }) => {
  if (!product) return null; // Ensure product data is available

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
          padding: "10px", // Remove default padding
          width: "40%",
          height: "80%",
          borderRadius: "20px",
        },
      }}
      
    >
      <div className="flex  gap-2">
        <div className="w-1/3">
          <img
            src={product.imgSrc}
            alt={product.name}
            className="object-cover w-[12rem] h-[14rem] mb-4"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            obcaecati facilis id nam asperiores quis
          </p>
        </div>
        <div className="flex w-2/3 flex-col gap-4">
          <div className="w-full flex justify-between">
            {" "}
            <h2 className="text-2xl mb-2">{product.name}</h2>
            <div className="flex justify-start items-start">
              {" "}
              <button onClick={onRequestClose}>
                <CancelOutlined />
              </button>
            </div>
          </div>
          <div className="flex gap-2 justify-between">
            <div>
              {" "}
              <p
                className={`text-sm mb-4 ${
                  product.stock === "IN STOCK"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {product.stock}
              </p>{" "}
              <p className="text-lg mb-2"> NGN:{product.price}</p>
            </div>
            <div className="flex gap-4 flex-col">
              <p className="bg-[#BB2929] text-[1em] py-[1px] px-[3px] text-white">
                PROMO 35% OFF{" "}
              </p>
              <div className="flex flex-col gap-2">
                <button className="bg-[#172D13] text-[1em] py-[3px] px-[6px] text-white rounded-2xl border-[1px] border-white">
                  Buy now
                </button>
                <button className="bg-white text-[1em] py-[3px] px-[6px] text-black rounded-2xl border-[1px] border-green">
                  Add to cart
                </button>
              </div>
              <div className="flex items-center justify-around">
                <MinimizeOutlined />
                QTY: <AddOutlined />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MyModal;
