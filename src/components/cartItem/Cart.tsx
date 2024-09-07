import React from "react";
import DeleteIcon from "./DeleteIcon";
import { roomData } from "../../seaction/Page";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Asgaard sofa",
      price: 250000,
      quantity: 1,
      imageUrl: "/Asgaardsofa.png",
    },
  ];

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const total = subtotal;
   const {cartHeading} = roomData
  return (
   <div className="sec_padding">
    <div className="container">
    <div className="lg:flex  p-6">
      {/* Left side: Cart Items Table */}
      <div className="w-full lg:w-2/3">
        {/* Headers */}
        <div className="grid md:grid-cols-4 grid-cols-2 font-semibold bg-[#FAF3EA] p-4">
          {
            cartHeading.map((item,ind)=>(
              <span key={ind} className="text-center text-[16px] font-semibold text-black">{item}</span>
            ))
          }
        </div>

        {/* Cart Items */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="md:flex justify-between items-center mt-4 py-4"
          >
            {/* Product Image and Name */}
            <div className="flex items-center">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-20 h-20 rounded-md bg-[#FAF3EA]"
              />
              <span className="ml-4 text-[16px] font-normal text-[#9F9F9F]">{item.name}</span>
            </div>

            {/* Price */}
            <div className="text-center  text-[16px] font-normal text-[#9F9F9F]">Rs. {item.price.toLocaleString()}</div>

            {/* Quantity */}
            <div className="text-center mt-4 md:mt-0">
              <input
                type="number"
                min="1"
                value={item.quantity}
                className="w-12 text-center border border-gray-300 rounded-md"
                readOnly
              />
            </div>

            {/* Subtotal */}
            <div className="text-center mt-4 md:mt-0">
              Rs. {(item.price * item.quantity).toLocaleString()}
            </div>
            <div className="flex justify-center md:justify-start mt-4 md:mt-0">
            <DeleteIcon/>
            </div>
          </div>
        ))}
      </div>

      {/* Right side: Cart Totals */}
      <div className="w-full lg:w-1/3 lg:ml-10 mt-6 md:mt-0">
        <div className="bg-[#FAF3EA] px-20 pt-7 pb-14 rounded-lg">
          <h2 className="font-semibold text-[32px] text-black text-center ">Cart Totals</h2>

          <div className="mt-4">
            <div className="md:flex justify-between flex-wrap">
              <span className="text-[16px] font-medium text-black">Subtotal</span>
              <span className="text-[16px] font-medium text-[#9F9F9F]">Rs. {subtotal.toLocaleString()}</span>
            </div>

            <div className="md:flex justify-between mt-3 ">
              <span className="text-[16px] font-medium text-black">Total</span>
              <span className="text-[20px] font-medium text-[#B88E2F]">Rs. {total.toLocaleString()}</span>
            </div>
            <div>
            <button className="mt-6 w-full border border-black text-black p-3 rounded-md">
              Check Out
            </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </div>
   </div>
  );
};

export default Cart;
