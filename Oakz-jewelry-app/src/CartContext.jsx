import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  console.log("this is the cart item 1", cartItems.length);
  // Load cart items from localStorage on mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);
  console.log("this is the cart item 2", cartItems.length);

  // Update localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

  }, [cartItems]);
  console.log("this is the cart item 3", cartItems);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const newCartItems = [...prevItems, product];
      console.log("Added to cart:", product);
      return newCartItems;
    });
  };
  console.log("this is the cart item 4", cartItems.length);

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  console.log("this is the cart item 5", cartItems.length);
  const clearCart = () => {
    setCartItems([]);
  };
  console.log("this is the cart item 6", cartItems.length);
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
