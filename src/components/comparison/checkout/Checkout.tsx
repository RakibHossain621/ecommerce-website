import React from 'react';
const checkoutData = {
    products: [
        { name: 'Asgard Sofa', quantity: 1, price: 250000 }
    ],
    summary: {
        subtotal: 250000,
        total: 250000
    },
    paymentMethods: [
        { id: 'bank', label: 'Direct Bank Transfer', description: 'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.' },
        { id: 'cod', label: 'Cash on Delivery' }
    ],
    personalDataInfo: 'Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.'
};
const checkoutForm = {
    fields: [
        { id: 'firstName', label: 'First Name', type: 'text', colSpan: '1' },
        { id: 'lastName', label: 'Last Name', type: 'text', colSpan: '1' },
        { id: 'company', label: 'Company Name (Optional)', type: 'text', colSpan: '2' },
        { id: 'country', label: 'Country / Region', type: 'select', colSpan: '2', options: ['United States', 'India'] },
        { id: 'street', label: 'Street Address', type: 'text', colSpan: '2' },
        { id: 'city', label: 'Town / City', type: 'text', colSpan: '2' },
        { id: 'province', label: 'Province', type: 'select', colSpan: '2', options: ['Punjab', 'Sindh'] },
        { id: 'zip', label: 'ZIP Code', type: 'text', colSpan: '2' },
        { id: 'phone', label: 'Phone', type: 'text', colSpan: '2' },
        { id: 'email', label: 'Email Address', type: 'email', colSpan: '2' },
        { id: 'additionalInfo', label: 'Additional Information', type: 'textarea', colSpan: '2' }
    ]
};
const Checkout = () => {
    const { products, summary, paymentMethods, personalDataInfo } = checkoutData;
    const { fields } = checkoutForm;
    return (
        <div className='sec_padding '>
            <div className="container">
                <div className="wrap flex flex-col lg:flex-row ">
                      {/* Left Section - Billing Details */}
                      <div className="left w-full lg:w-1/2 bg-white p-6">
                        <h2 className="text-xl font-semibold mb-6">Billing Details</h2>
                        <form className="grid grid-cols-2 gap-4">
                            {fields.map((field) => (
                                <div
                                    key={field.id}
                                    className={`col-span-2 lg:col-span-${field.colSpan}`}
                                >
                                    <label htmlFor={field.id} className="block text-sm mb-2">
                                        {field.label}
                                    </label>
                                    
                                    {field.type === 'text' || field.type === 'email' ? (
                                        <input
                                            type={field.type}
                                            id={field.id}
                                            className="w-full p-2 border rounded-md"
                                        />
                                    ) : field.type === 'select' ? (
                                        <select id={field.id} className="w-full p-2 border rounded-md">
                                            {field.options?.map((option, index) => (
                                                <option key={index} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    ) : field.type === 'textarea' ? (
                                        <textarea
                                            id={field.id}
                                            className="w-full p-2 border rounded-md"
                                            
                                        ></textarea>
                                    ) : null}
                                </div>
                            ))}
                        </form>
                    </div>

                     {/* Right Section - Order Summary */}
                     <div className="right w-full lg:w-1/2 p-6 mt-8 lg:mt-0">
                        <div className='flex justify-between'>
                            <h1 className="text-xl font-semibold mb-6">Product</h1>
                            <h1 className='text-xl font-semibold'>Subtotal</h1>
                        </div>

                        {/* Products List */}
                        {products.map((product, index) => (
                            <div key={index} className="shortCart  mb-4">
                                <div className="flex justify-between mb-2">
                                    <span>{product.name} x {product.quantity}</span>
                                    <span>Rs. {product.price.toLocaleString()}</span>
                                </div>
                            </div>
                        ))}

                        {/* Summary */}
                        <div className=" mt-2  flex justify-between">
                            <span className="font-semibold">Subtotal</span>
                            <span className="font-semibold">Rs. {summary.subtotal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold text-xl">Total</span>
                            <span className="font-semibold text-xl text-orange-500">Rs. {summary.total.toLocaleString()}</span>
                        </div>

                        {/* Payment Methods */}
                        <div className="mb-4 mt-4">
                            {paymentMethods.map(method => (
                                <div key={method.id} className="mb-2">
                                    <label className="block mb-2">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value={method.id}
                                            className="mr-2"
                                        />
                                        {method.label}
                                    </label>
                                    {method.description && (
                                        <p className="text-sm text-gray-600">{method.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Personal Data Info */}
                        <div className="mb-4">
                            <p className="text-sm text-gray-500">
                                {personalDataInfo}
                            </p>
                        </div>

                        {/* Place Order Button */}
                        <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-md">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
