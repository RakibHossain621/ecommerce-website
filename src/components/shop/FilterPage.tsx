import React from 'react';
import { roomData } from '../../seaction/Page';

const FilterPage = () => {
  const { filter } = roomData;
  console.log(filter)
  return (
    <div className="filter bg-[#F9F1E7] py-4">
      <div className="container mx-auto px-4">
        <div className="wrap flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="left sm:flex items-center space-x-4 mb-4 md:mb-0">
            <div className='flex items-center space-x-4 mb-4 md:mb-0'>
              <button className="flex items-center gap-[15px] ">
                {filter.filterIcon}
                <span className='text-[20px] leading-7 font-normal text-black  '>{filter.filterText}</span>
              </button>
              <button className="text-gray-600 border-r-black ">
                {filter.circleIcon}
              </button>
              <button className="text-gray-600 border-r	border-[#9F9F9F] pr-3 ">
                {filter.drividerIcon}
              </button>
            </div>
            <span className="text-[16px] leading-6 font-normal text-black	 ">{filter.spanText}</span>
          </div>


          <div className="right flex items-center space-x-4">
            <span className="text-[20px] leading-8	font-normal text-black">{filter.inputText}</span>
            <input
              type="number"
              defaultValue="16"
              className="w-12 p-1 text-center border border-gray-300 rounded text-[20px] leading-8	font-normal text-[#9F9F9F]"
            />
            <span className="md:text-[20px] text-[18px] leading-8	font-normal text-black">{filter.inputText2}</span>
            <select className="p-1 border border-gray-300 rounded text-[20px] leading-8	font-normal text-[#9F9F9F]">
              <option value="default">Default</option>

            </select>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
