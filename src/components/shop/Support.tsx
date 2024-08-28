import React from 'react';
import { roomData } from '../../seaction/Page';

const Support = () => {
    const { support } = roomData; 

    return (
        <section className="sec_padding bg-[#FAF3EA] ">
            <div className="container ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {support.map((item, index) => (
                        <div key={index} className="single">
                            <div className="icon  flex    gap-3">
                                {item.trophyIcon || item.warrntyIcon || item.shippingIcon || item.CustomerSupportIcon}
                                <div>
                                <h3 className=" text-[21px] leading-[37.5px] text-[#242424] ">{item.title}</h3> 
                                <p className="text-[16px] leading-7 font-medium text-[#898989]">{item.subtitle}</p>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Support;






// import React, { useState } from 'react';

// const ProductPage = () => {
//     // Assuming images and other data come from a product object
//     const product = {
//         name: 'Asgaard sofa',
//         price: 'Rs. 250,000.00',
//         rating: 4.5,
//         reviews: 5,
//         description: 'Setting the bar as one of the loudest speakers in its class, the Asgaard is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',
//         sizes: ['L', 'XL', 'XS'],
//         colors: ['#6b4eff', '#ffce49', '#000000'],
//         images: [
//             '/images/sofa1.png',
//             '/images/sofa2.png',
//             '/images/sofa3.png',
//             '/images/sofa4.png',
//         ],
//         sku: 'SS001',
//         category: 'Sofas',
//         tags: ['Sofa', 'Chair', 'Home', 'Shop'],
//     };

//     const [selectedImage, setSelectedImage] = useState(product.images[0]);
//     const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
//     const [selectedColor, setSelectedColor] = useState(product.colors[0]);
//     const [quantity, setQuantity] = useState(1);

//     return (
//         <div className="product-page container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Left Section - Images */}
//             <div className="flex flex-col items-start">
//                 <div className="flex flex-col gap-4">
//                     {product.images.map((image, index) => (
//                         <img
//                             key={index}
//                             src={image}
//                             alt={`Sofa ${index + 1}`}
//                             className={`cursor-pointer w-20 h-20 object-cover rounded-md ${selectedImage === image ? 'border-2 border-black' : ''}`}
//                             onClick={() => setSelectedImage(image)}
//                         />
//                     ))}
//                 </div>
//                 <div className="mt-4">
//                     <img src={selectedImage} alt="Selected Sofa" className="w-full h-auto object-cover rounded-md" />
//                 </div>
//             </div>

//             {/* Right Section - Product Details */}
//             <div className="product-details">
//                 <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
//                 <p className="text-2xl text-gray-700 mb-4">{product.price}</p>
//                 <div className="flex items-center mb-4">
//                     <div className="flex text-yellow-400">
//                         {/* Render stars based on rating */}
//                         {[...Array(5)].map((star, index) => (
//                             <svg key={index} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${index < Math.floor(product.rating) ? 'fill-current' : 'fill-none'}`} viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                             </svg>
//                         ))}
//                     </div>
//                     <span className="ml-2 text-gray-600">{product.reviews} Customer Reviews</span>
//                 </div>
//                 <p className="text-gray-600 mb-4">{product.description}</p>

//                 <div className="mb-4">
//                     <span className="font-semibold">Size:</span>
//                     <div className="flex gap-2 mt-2">
//                         {product.sizes.map((size, index) => (
//                             <button
//                                 key={index}
//                                 className={`px-4 py-2 border rounded-md ${selectedSize === size ? 'bg-black text-white' : 'text-black'}`}
//                                 onClick={() => setSelectedSize(size)}
//                             >
//                                 {size}
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="mb-4">
//                     <span className="font-semibold">Color:</span>
//                     <div className="flex gap-2 mt-2">
//                         {product.colors.map((color, index) => (
//                             <button
//                                 key={index}
//                                 className={`w-8 h-8 rounded-full border ${selectedColor === color ? 'border-black' : 'border-gray-300'}`}
//                                 style={{ backgroundColor: color }}
//                                 onClick={() => setSelectedColor(color)}
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 <div className="flex items-center mb-6">
//                     <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-1 border rounded-l-md">-</button>
//                     <input
//                         type="text"
//                         value={quantity}
//                         onChange={(e) => setQuantity(parseInt(e.target.value))}
//                         className="w-12 text-center border-t border-b py-1"
//                     />
//                     <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 border rounded-r-md">+</button>
//                 </div>

//                 <div className="flex gap-4 mb-4">
//                     <button className="px-6 py-2 bg-black text-white rounded-md">Add To Cart</button>
//                     <button className="px-6 py-2 border rounded-md">Compare</button>
//                 </div>

//                 <div className="text-gray-600">
//                     <p><strong>SKU:</strong> {product.sku}</p>
//                     <p><strong>Category:</strong> {product.category}</p>
//                     <p><strong>Tags:</strong> {product.tags.join(', ')}</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProductPage;
