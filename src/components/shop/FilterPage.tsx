import React from 'react';
import { roomData } from '../../seaction/Page';

const FilterPage = () => {
  const { filter } = roomData;

  return (
    <div className="filter bg-[#F9F1E7] py-4">
      <div className="container mx-auto px-4">
        <div className="wrap flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="left flex items-center space-x-4 mb-4 md:mb-0">
            <button className="flex items-center space-x-1 text-sm text-gray-600">
              {filter.filterIcon}
              <span>{filter.filterText}</span>
            </button>
            <button className="text-gray-600 hover:text-black">
              {filter.circleIcon}
             
            </button>
            <span className="text-sm text-gray-600">{filter.spanText}</span>
          </div>

          {/* Right Section */}
          <div className="right flex items-center space-x-4">
            <span className="text-sm text-gray-600">{filter.inputText}</span>
            <input
              type="number"
              defaultValue="16"
              className="w-12 p-1 text-center border border-gray-300 rounded"
            />
            <span className="text-sm text-gray-600">{filter.inputText2}</span>
            <select className="p-1 border border-gray-300 rounded">
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              {/* Add more sorting options as needed */}
            </select>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
