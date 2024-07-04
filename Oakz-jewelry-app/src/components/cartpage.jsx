import React, { useState } from "react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";
import DeleteModal from "./DeleteModal"; // Adjust the path as necessary

const CartPage = () => {
  const { cartItems, updateCart, removeFromCart } = useCart();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);
  const navigate = useNavigate(); // Use useNavigate for navigation in React Router v6

  const incrementQuantity = (productId) => {
    const product = cartItems.find((item) => item.id === productId);
    if (product) {
      updateCart(productId, product.quantity + 1);
    }
  };

  const decrementQuantity = (productId) => {
    const product = cartItems.find((item) => item.id === productId);
    if (product) {
      const newQuantity = product.quantity - 1;
      if (newQuantity > 0) {
        updateCart(productId, newQuantity);
      } else {
        setItemToRemove(productId);
        setShowDeleteModal(true);
      }
    }
  };

  const handleRemoveConfirmed = () => {
    if (itemToRemove) {
      removeFromCart(itemToRemove);
      setItemToRemove(null);
    }
    setShowDeleteModal(false);
  };

  const handleRemoveCancelled = () => {
    setShowDeleteModal(false);
  };

  const groupCartItems = (items) => {
    const groupedItems = {};
    items.forEach((item) => {
      if (groupedItems[item.id]) {
        groupedItems[item.id].quantity += item.quantity;
      } else {
        groupedItems[item.id] = { ...item };
      }
    });
    return Object.values(groupedItems);
  };

  const groupedCartItems = groupCartItems(cartItems);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate("/checkout", { state: { totalPrice, cartItems: groupedCartItems } });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
      {groupedCartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="flex flex-col gap-2">
          <ul className="flex flex-col gap-2">
            {groupedCartItems.map((item, index) => (
              <li
                key={index}
                className="bg-[#FEFEFE] w-full flex flex-row sm:justify-between justify-center gap-6 sm:gap-0 border py-3 px-3 sm:px-8 shadow-md font-bienvenido text-green"
              >
                <div className="flex">
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-cover mr-4 border rounded-lg"
                  />
                  <div className="flex flex-col gap-2 sm:gap-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="sm:leading-[18px] leading-3 font-bienvenido sm:text-[16px] text-[14px] text-green">
                      NGN: {item.price}
                    </p>
                    <p className="hidden sm:block">Quantity: {item.quantity}</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => decrementQuantity(item.id)}
                        className="w-[24px] h-[24px] flex items-center justify-center font-extrabold bg-green text-white rounded-full sm:border-0 border-2 border-green hover:bg-red-600"
                      >
                        -
                      </button>
                      <p className="block sm:hidden">Qty: {item.quantity}</p>
                      <button
                        onClick={() => incrementQuantity(item.id)}
                        className="w-[24px] h-[24px] flex items-center justify-center font-extrabold bg-brownbg text-white hover:bg-blue-600 rounded-full sm:border-0 border-2 border-green"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-7 sm:gap-5 justify-around">
                  <button
                    onClick={() => {
                      setItemToRemove(item.id);
                      setShowDeleteModal(true);
                    }}
                    className="flex justify-center items-center text-white px-3 sm:py-1 py-0 h-5 sm:h-7 bg-red-500 rounded-2xl border text-sm"
                  >
                    Remove
                  </button>
                  <div className="sm:text-[16px] leading-[18px] text-[12px]">
                    Price: <br /> NGN:{item.price * item.quantity}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl font-bienvenido text-green">
              Total : {totalPrice}
            </h3>
            <button
              className="px-3 py-1 rounded-2xl bg-green text-white w-full"
              onClick={handleCheckout}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      )}
      <DeleteModal
        isOpen={showDeleteModal}
        onClose={handleRemoveCancelled}
        onConfirm={handleRemoveConfirmed}
      />
    </div>
  );
};

export default CartPage;
