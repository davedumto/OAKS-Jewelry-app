import React, { useState } from 'react';
import productItems from '../data/productItem';

// const productItems = [
//   {
//     imgSrc: "/images/ring1.jpeg",
//     name: "Rose Roast Rings",
//     stock: "IN STOCK",
//     price: 2500,
//   },
//   {
//     imgSrc: "/images/ring2.jpeg",
//     name: "Golden Bliss Rings",
//     stock: "IN STOCK",
//     price: 5500,
//   },
// ];

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { ...productItems[0], quantity: 1, id: productItems[0].price },
    { ...productItems[1], quantity: 1, id: productItems[1].price },
  ]);

  const increaseQuantity = (productId) => {
    setCartItems(
      cartItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems(
      cartItems.map(item =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4">
       <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* {productItems.map((product) => (
          <li key={product.price} className="border p-4 rounded-md">
            <img src={product.imgSrc} alt={product.name} className="w-full h-40 object-cover mb-4" />
            <div className="font-bold">{product.name}</div>
            <div>Price: ${product.price}</div>
            <div>Stock: {product.stock}</div>
            <button
              onClick={() => addToCart(product)}
              disabled={product.stock === 'OUT OF STOCK'}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </li>
        ))} */}
      </ul> 
      <ul className="flex flex-col gap-5 w-full px-6">
        {cartItems.map((item) => (
          <li key={item.id} className="bg-[#FEFEFE] w-full flex flex-row justify-between border py-3 px-8 rounded-md font-bienvenido text-green">
            <div className='flex gap-4'>
              <img src={item.imgSrc} alt={item.name} className="w-28 h-28 object-cover border border-green rounded-lg" />
              <div className='flex flex-col justify-between '>
                <div>
                  <div className="font-bold text-[32px] leading-[37.44px]">{item.name}</div>
                  <p className='leading-[18px] font-bienvenido text-green'>NGN: {item.price}</p >
                </div>
                <div className='flex gap-3 items-center sm:pb-3'>
                  <button onClick={() => decreaseQuantity(item.id)} className="flex items-center justify-center w-[24px] h-[24px] bg-green text-white  rounded-full hover:bg-red-600">
                    -
                  </button>
                  <span>Qty: {item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)} className="w-[24px] h-[24px] bg-brownbg text-white   hover:bg-green-600 rounded-full">
                    +
                  </button>
                  
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <button className='px-3 py-1 rounded-2xl border border-green hover:text-white hover:bg-green'>View product</button>
              <div>Price: <br/> NGN:{item.price * item.quantity}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-end px-6">
        <div className='flex flex-col gap-3'>
          <h3 className="text-3xl font-bienvenido text-green">Total : {totalPrice}</h3>
          <button className='px-3 py-1 rounded-2xl bg-green text-white w-full'>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;