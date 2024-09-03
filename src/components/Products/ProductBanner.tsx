import React from 'react';

const productBanner = [
    { label: 'Home' },
    { label: 'Shop' },
    { label: 'Asgaard sofa' }
];

const ProductBanner = ({ separator = '>' }) => {
  return (
    <div className='bg-[#F9F1E7]'>
      <div className="container">
        <div className='flex gap-5'>
          {
            productBanner.map((product, index) => (
              <div key={index} className='flex gap-3 items-center'>
                <p className={`text-[16px] font-normal ${index === 2 ? 'text-black' : 'text-[#9F9F9F]'}`}>
                  {product.label}
                </p>
                {index !== 2 && (
                  <span className='text-[24px]'>{separator}</span>
                )}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
