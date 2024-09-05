import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Asgaard Sofa",
    price: 250000,
    rating: 4.7,
    reviews: 204,
    image: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    id: 2,
    name: "Outdoor Sofa Set",
    price: 224000,
    rating: 4.2,
    reviews: 145,
    image: "https://via.placeholder.com/150", // Placeholder image
  },
];

const Gotoproduct = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (event) => {
    const productId = event.target.value;
    const product = products.find((p) => p.id === parseInt(productId))
  };

  return (
    <div className="flex justify-between p-8">
      {/* Left Side: Link to Product Page */}
      <div className="w-1/5">
        <h3 className="text-lg font-bold">Go to Product page for more Products</h3>
        <button className="text-blue-500 mt-4 hover:underline">View More</button>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-2 gap-8 w-3/5">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-100 rounded-lg p-6 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-lg font-semibold">Rs. {product.price.toLocaleString()}</p>
            <div className="flex justify-center items-center mt-2 space-x-2">
              <span className="text-sm text-gray-600">{product.reviews} Reviews</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add a Product Section */}
      <div className="w-1/5 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Add A Product</h2>
        <select
          className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
