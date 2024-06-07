import React from "react";
import { useCart } from "../CartContext";

const CartPage = () => {
  const { cartItems } = useCart(); // Access cartItems from CartContext

  // Function to group cart items by ID and calculate their total quantity
  const groupCartItems = (items) => {
    const groupedItems = {};
    items.forEach((item) => {
      if (groupedItems[item.id]) {
        groupedItems[item.id].quantity += 1; // Increment quantity if item with same ID exists
      } else {
        groupedItems[item.id] = { ...item, quantity: 1 }; // Add new item with quantity 1
      }
    });
    return Object.values(groupedItems); // Convert object back to array
  };

  // Group cart items
  const groupedCartItems = groupCartItems(cartItems);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
      {groupedCartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
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
                <p>Quantity: {item.quantity}</p>

                <p>Total price: NGN: {item.price * item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
