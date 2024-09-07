import React from "react";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Asgaard sofa",
      price: 250000,
      quantity: 1,
      imageUrl: "https://example.com/sofa.jpg", // Replace with actual image URL
    },
  ];

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const total = subtotal; // Assuming no tax or shipping cost for now

  return (
    <div className="flex flex-col md:flex-row p-6">
      {/* Left side: Cart Items Table */}
      <div className="w-full md:w-2/3">
        {/* Headers */}
        <div className="grid grid-cols-4 font-semibold bg-gray-100 p-4">
          <span>Product</span>
          <span className="text-center">Price</span>
          <span className="text-center">Quantity</span>
          <span className="text-center">Subtotal</span>
        </div>

        {/* Cart Items */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-4 items-center py-4 border-b border-gray-200"
          >
            {/* Product Image and Name */}
            <div className="flex items-center">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-20 h-20 object-cover"
              />
              <span className="ml-4">{item.name}</span>
            </div>

            {/* Price */}
            <div className="text-center">Rs. {item.price.toLocaleString()}</div>

            {/* Quantity */}
            <div className="text-center">
              <input
                type="number"
                min="1"
                value={item.quantity}
                className="w-12 text-center border border-gray-300 rounded-md"
                readOnly
              />
            </div>

            {/* Subtotal */}
            <div className="text-center">
              Rs. {(item.price * item.quantity).toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      {/* Right side: Cart Totals */}
      <div className="w-full md:w-1/3 md:ml-10 mt-6 md:mt-0">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="font-semibold text-lg">Cart Totals</h2>

          <div className="mt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rs. {subtotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between mt-2 font-bold text-lg">
              <span>Total</span>
              <span className="text-orange-500">Rs. {total.toLocaleString()}</span>
            </div>

            <button className="mt-6 w-full bg-black text-white p-3 rounded-md">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
