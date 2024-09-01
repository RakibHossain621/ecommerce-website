import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiAlignJustify } from 'react-icons/fi';
import {roomData} from '../seaction/Page'

const navList = [
  { title: 'Home', path: '/' },
  { title: 'Shop', path: '/shop' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
  { title: 'Blog', path: '/blog' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const {navbarIcon} = roomData
  return (
    <header className="w-full flex items-center justify-between md:px-20 lg:px-8 py-4 px-8 relative">
      <div className="flex items-center cursor-pointer">
        <img  src="/logo.png" alt="Furniro Logo" className="w-[157px] h-[36px]" />
      </div>

      {/* Sidebar Menu for mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button onClick={handleClick} className="absolute top-4 right-4 text-2xl">
          &times; {/* Close button */}
        </button>
        <ul className="mt-16">
          {navList.map((item, index) => (
            <li key={index} className="p-4">
              <Link to={item.path} className="text-black text-[16px] leading-6 font-medium hover:text-red-500">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Button to toggle sidebar */}
      <button
        onClick={handleClick}
        className='md:text-[47px] text-[30px] lg:hidden flex items-center justify-center'
      >
        <FiAlignJustify />
      </button>

      {/* Desktop Menu */}
      <ul className="lg:flex gap-20 hidden z-20">
        {navList.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="text-black text-[16px] leading-6 font-medium hover:text-red-500">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="lg:flex items-center gap-8 cursor-pointer hidden">
      {
        navbarIcon.map((item, index) => (
          <div key={index}>
            {Object.values(item)[0]}
          </div>
        ))
      }
      </div>
    </header>
  );
}

export default Navbar;
