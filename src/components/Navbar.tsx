import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiAlignJustify } from 'react-icons/fi';
import { roomData } from '../seaction/Page';
import CartImage from './CartImage';
import CrossIcon from './CrossIcon';

const navList = [
  { title: 'Home', path: '/' },
  { title: 'Shop', path: '/shop' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
  { title: 'Blog', path: '/blog' } // Ensure this path matches your router config
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile sidebar
  const [isCartOpen, setIsCartOpen] = useState(false); // For cart sidebar
  const [activeLink, setActiveLink] = useState('/'); // State to track active link

  const handleClick = () => {
    setIsOpen(!isOpen); 
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const toggleCartSidebar = (index) => {
    if (index === 3) { // Ensure the correct index for the cart icon
      setIsCartOpen(!isCartOpen); // Only toggle if it's the cart icon
    }
  };

  const { navbarIcon } = roomData; // Assuming roomData includes navbarIcon array

  return (
    <header className="w-full flex items-center justify-between md:px-20 lg:px-8 py-4 px-8 relative">
      <div className="flex items-center cursor-pointer">
        <img src="/logo.png" alt="Furniro Logo" className="w-[157px] h-[36px]" />
      </div>

      {/* Sidebar Menu for mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <button onClick={handleClick} className="absolute top-4 right-4 text-2xl">
          &times; {/* Close button */}
        </button>
        <ul className="mt-16">
          {navList.map((item, index) => (
            <li key={index} className="p-4">
              <Link
                to={item.path}
                className={`text-[16px] leading-6 font-medium hover:text-red-500 ${activeLink === item.path ? 'text-red-500' : 'text-black'
                  }`}
                onClick={() => {
                  handleLinkClick(item.path);
                  handleClick(); // Close sidebar on mobile
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Button to toggle sidebar */}
      <button
        onClick={handleClick}
        className="md:text-[47px] text-[30px] lg:hidden flex items-center justify-center"
      >
        <FiAlignJustify />
      </button>

      {/* Desktop Menu */}
      <ul className="lg:flex gap-20 hidden z-20 overflow-auto flex-wrap">
        {navList.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`text-[16px] leading-6 font-medium hover:text-red-500 ${activeLink === item.path ? 'text-red-500' : 'text-black'
                }`}
              onClick={() => handleLinkClick(item.path)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Navbar Icons */}
      <div className="lg:flex items-center gap-8 cursor-pointer hidden">
        {navbarIcon.map((item, index) => (
          <div key={index} onClick={() => toggleCartSidebar(index)}>
            {Object.values(item)[0]} {/* Display icons */}
          </div>
        ))}
      </div>

      {/* Shopping Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: '279px', height: '353px' , overflowY: 'auto' }} // Handle overflow and set maxHeight
      >
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Shopping Cart</h2>
            <button onClick={() => setIsCartOpen(false)}>
              <CartImage />
            </button>
          </div>

          {/* Cart Items */}
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <img src="/Asgaardsofa.png" alt="Asgaard sofa" className="w-16 h-16 object-cover rounded" />
              <div className="ml-4">
                <h3 className="text-lg font-medium">Asgaard sofa</h3>
                <p>1 x Rs. 250,000.00</p>
              </div>
              <button className="ml-auto">
                <CrossIcon />
              </button>
            </div>

            <div className="flex items-center">
              <img src="/Asgaard1.png" alt="Casaliving Wood" className="w-16 h-16 object-cover rounded" />
              <div className="ml-4">
                <h3 className="text-lg font-medium">Casaliving Wood</h3>
                <p>1 x Rs. 270,000.00</p>
              </div>
              <button className="ml-auto">
                <CrossIcon />
              </button>
            </div>
          </div>

          {/* Subtotal */}
          <div className="mt-8">
            <div className="flex justify-between items-center text-lg">
              <span>Subtotal</span>
              <span className="font-bold text-yellow-500">Rs. 520,000.00</span>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="mt-8 flex justify-between space-x-2">
            <button className="w-full py-2 bg-gray-200 text-gray-800 rounded">Cart</button>
            <button className="w-full py-2 bg-yellow-500 text-white rounded">Checkout</button>
            <button className="w-full py-2 bg-gray-200 text-gray-800 rounded">Comparison</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
