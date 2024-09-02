import React from 'react';
import { FaShareAlt } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { RiDislikeLine } from "react-icons/ri";

const ImageCardBox = ({ productName, productImage, discount, isNew, oldPrice, price, subtitle }) => {
  return (
    <section className="relative group">
      <div className="relative overflow-hidden rounded-md">
        <img
          src={productImage}
          alt={productName}
          className="w-full h-auto object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
        />
        {discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
            -{discount}%
          </span>
        )}
        {isNew && (
          <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 text-xs rounded">
            New
          </span>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white text-[#B88E2F] font-semibold py-2 px-4 rounded mb-2">
            Add to Cart
          </button>
          <div className="flex space-x-4 text-white">
            <button className="flex justify-center items-center gap-2">
              <FaShareAlt /> Share
            </button>
            <button className="flex justify-center items-center gap-2">
              <MdCompareArrows /> Compare
            </button>
            <button className="flex justify-center items-center gap-2">
              <RiDislikeLine /> Like
            </button>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="bg-[#F4F5F7] pl-[15px] pr-[21px] py-[20px]">
        <h3 className="mb-[0.5em] text-[24px] font-semibold leading-[28.8px] text-[#3A3A3A]">
          {productName}
        </h3>
        <p className="text-[15px] leading-6 font-medium text-[#898989]">{subtitle}</p>
        <div className="mt-2 flex items-center">
          {price && (
            <span className="text-[16px] font-semibold leading-8 text-[#3A3A3A]">
              Rp {price}
            </span>
          )}
          {oldPrice && (
            <span className="ml-2 text-[#B0B0B0] leading-6 font-normal text-[14px] line-through">
              Rp {oldPrice}
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageCardBox;
