import React from "react";
import { useCart } from "../CartContext";

const CartPage = () => {
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart } = useCart();

  const groupCartItems = (items) => {
    const groupedItems = {};
    items.forEach((item) => {
      if (groupedItems[item.id]) {
        groupedItems[item.id].quantity += 1;
      } else {
        groupedItems[item.id] = { ...item, quantity: 1 };
      }
    });
    return Object.values(groupedItems);
  };

  const groupedCartItems = groupCartItems(cartItems);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
      {groupedCartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="lg:flex lg:justify-between">
        <ul>
          {groupedCartItems.map((item, index) => (
            <li key={index} className="mb-4">
              <img
                src={item.imgSrc}
                alt={item.name}
                className="w-24 h-24 object-cover mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>Quantity: {item.id}</p>
                <div className="flex gap-2">
                  <button onClick={() => decrementQuantity(item.id)} className="w-[24px] h-[24px] flex items-center justify-center font-extrabold bg-green text-white  rounded-full sm:border-0 border-2 border-green hover:bg-red-600">-</button>
                  <button onClick={() => incrementQuantity(item.id)} className="w-[24px] h-[24px] flex items-center justify-center font-extrabold bg-brownbg text-white hover:bg-blue-600 rounded-full sm:border-0 border-2 border-green">+</button>
                  <button onClick={() => removeFromCart(item.id)} className="">Remove</button>
                </div>
                <p>Total price: NGN: {item.price * item.quantity}</p>
              </div>
            </li>
          ))}
          
        </ul>
        <div className='flex flex-col gap-3'>
          <h3 className="text-3xl font-bienvenido text-green">Total : {totalPrice}</h3>
          <button className='px-3 py-1 rounded-2xl bg-green text-white w-full'>CHECKOUT</button>
        </div>
        
        </div>
      )}
    </div>
  );
};

export default CartPage;
