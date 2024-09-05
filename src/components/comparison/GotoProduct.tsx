import React, { useState } from "react";
import StarSvg from "./StarSvg";

const products = [
  {
    id: 1,
    image: "/Asgaardsofa.png",
    name: "Asgaard Sofa",
    price: 250000,
    rating: 4.7,
    reviews: 204,
  },
  {
    image: "Outdoor sofa set 1.png",
    id: 2,
    name: "Outdoor Sofa Set",
    price: 224000,
    rating: 4.2,
    reviews: 145,
  },
];

const Gotoproduct = () => {
  const handleProductSelect = (event) => {
    const productId = event.target.value;
    const product = products.find((p) => p.id === parseInt(productId))
  };

  return (
    <div className="lg:flex justify-between p-8">
     
      <div className="lg:w-1/5 w-full">
        <h3 className="text-[28px] text-black font-medium">Go to Product page for more Products</h3>
        <button className="text-[20px] font-semibold text-[#727272] border-b-2 border-[#727272] mt-3 mb-4 lg:mb-0">View More</button>
      </div>

      
      <div className="grid md:grid-cols-2 gap-8 ">
        {products.map((product) => (
          <div key={product.id} className="">
            <div className="bg-[#F9F1E7] rounded-lg p-6">
              <img
                src={product.image}
                alt={product.name}
                className=" rounded-lg h-[190px] w-full mb-4"
              />
            </div>
            <h3 className="text-[24px] font-medium	text-black  mt-4">{product.name}</h3>
            <p className="text-[18px] font-semibold text-black">Rs. {product.price.toLocaleString()}</p>
            <div className="flex  items-center mt-2 space-x-2">
              <span className="text-[18px] font-semibold text-black">{product.rating}</span>
              <span className="border-r border-[#9F9F9F] "><StarSvg /></span>
              <span className="text-[13px] font-normal text-[#9F9F9F]">{product.reviews} Reviews</span>
            </div>
          </div>
        ))}
      </div>

      <div className="lg:w-1/5 w-full  p-6 rounded-lg">
        <h2 className="text-[24px] font-semibold text-black	 mb-4">Add A Product</h2>
        <select
          className="w-full p-3 pl-6 text-[14px] font-semibold text-white border border-gray-300 bg-[#B88E2F] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleProductSelect}
        >
          <option value="">Choose a Product</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>

      </div>
    </div>
  );
};

export default Gotoproduct;
