import React from 'react';
import HeadingTitle from '../HeadingTitile';
 import { roomData } from '../../seaction/Page';
import ImageCardBox from '../ImageCardBox';
const relitiveHeading = {
    title: 'Related Products'
};

const RelitiveProduct = () => {
    const {productCard} = roomData
    return (
            <div className="container">
                <HeadingTitle title={relitiveHeading.title} 
                  titleClass='mb-[22px]'
                />
                
     <div className="grid  lg:grid-cols-4 md:grid-cols-2 gap-4 ">
      {productCard.map((product, index) => (
        <ImageCardBox
          key={index}
          productName={product.productName}
          subtitle = {product.subtitle}
          productImage={product.productImage}
          discount={product.discount}
          isNew={product.isNew}
          oldPrice={product.oldPrice}
          price={product.price}
        />
    
      ))}
    </div>
    <div className='flex justify-center items-center cursor-pointer  mt-8'>
    <button className=' text-[#B88E2F] font-semibold py-2 px-4 rounded mb-2 border border-[#B88E2F '>Show more</button>
    </div>
    </div>
       
    );
}

export default RelitiveProduct;
