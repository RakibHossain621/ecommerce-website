import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
const ProductsDetiles = () => {
    const product = {
        name: 'Asgaard sofa',
        price: 'Rs. 250,000.00',
        rating: 4.5,
        reviews: 5,
        description: 'Setting the bar as one of the loudest speakers in its class, the Asgaard is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',
        sizes: ['L', 'XL', 'XS'],
        colors: ['#6b4eff', '#ffce49', '#000000'],
        images: [
            '/productgroup.png',
            '/productgroup.png',
            '/productgroup.png',
            '/productgroup.png',
        ],
    };
    const ProductCatagroy= [
        {
            left: 'SKU',
            right:["SS001"],
        },
        {
            left: 'Category',
            right:["Sofas"],
        },
        {
            left: 'Tags',
            right:["Sofa", "Chair", "Home", "Shop"],
        },
        {
            left: 'Share',
            right:[<FaFacebook />, <IoLogoLinkedin />, <FaTwitterSquare />,],
        },
        
     ]
    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <div className="product-page container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Section - Images */}
                <div className="flex  items-start gap-6">
                    <div className="flex flex-col gap-4">
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Sofa ${index + 1}`}
                                className={`cursor-pointer w-40 h-20 object-cover rounded-md bg-[#F9F1E7] ${selectedImage === image ? '' : ''}`}
                                onClick={() => setSelectedImage(image)}
                            />
                        ))}

                    </div>
                    <div className="">
                        <img src="/Asgaardsofa.png" alt=""
                            className='bg-[#F9F1E7]'
                        />
                    </div>

                </div>

                {/* Right Section - Product Details */}
                <div className="product-details">
                    <h1 className="text-[42px] font-normal	text-black  mb-2">{product.name}</h1>
                    <p className="text-[24px] font-medium text-[#9F9F9F]	 mb-4">{product.price}</p>
                    <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400 border-r-2 border-[#9F9F9F] pr-3">

                            {[...Array(5)].map((star, index) => (
                                <svg key={index} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${index < Math.floor(product.rating) ? 'fill-current' : 'fill-none'}`} viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <span className="ml-2 text-[13px] font-normal text-[#9F9F9F] ">{product.reviews} Customer Reviews</span>
                    </div>
                    <p className="text-[13px] font-normal text-black max-w-[445px]  mb-4">{product.description}</p>

                    <div className="mb-4">
                        <span className="text-[14px] font-normal text-[#9F9F9F] ">Size:</span>
                        <div className="flex gap-2 mt-4">
                            {product.sizes.map((size, index) => (
                                <button
                                    key={index}
                                    className={`px-4 py-2 border rounded-md ${selectedSize === size ? 'bg-[#B88E2F] text-white' : 'text-black'}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <span className="text-[14px] font-normal text-[#9F9F9F]">Color:</span>
                        <div className="flex gap-2 mt-4">
                            {product.colors.map((color, index) => (
                                <button
                                    key={index}
                                    className={`w-8 h-8 rounded-full border ${selectedColor === color ? 'border-black' : 'border-gray-300'}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => setSelectedColor(color)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="lg:flex items-center  gap-3 mb-6 mt-8 border-b border-[#D9D9D9] pb-14">
                        <div className="flex items-center w-[150px] justify-between   border border-[#9F9F9F] rounded-md ">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="px-3 py-3"
                            >
                                -
                            </button>
                            <input
                                type="text"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                className="w-12 text-center py-1"
                            />
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="px-3 py-1 "
                            >
                                +
                            </button>
                        </div>

                        <div className="flex  gap-4 mt-4 lg:mt-0 ">
                            <button className="px-6 py-2  bg-transparent text-black border border-black rounded-md text-sm md:text-base">
                                Add To Cart
                            </button>
                            <button className="px-6 py-2  border border-black rounded-md text-sm md:text-base">
                                + Compare
                            </button>
                        </div>
                    </div>
                    
                    <ul>
                    {
                        ProductCatagroy.map((item,index)=>(
                            <li key={index} className=' flex justify-start items-center gap-8 mb-5'>
                                <span className='w-[100px] text-[16px] font-normal text-[#9F9F9F]'>{item.left}</span>
                                <span className='text-[16px] font-medium text-[#9F9F9F]'>:</span>
                                <span className='flex items-center justify-start gap-3 text-[16px] font-normal text-[#9F9F9F]'>{item.right.map((items)=>items)}</span>
                            </li>
                        ))
                    }
                </ul>

                </div>
               
            </div>

        </>
    );
}

export default ProductsDetiles;

 