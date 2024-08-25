import React from 'react'
import ImageCardBox from '../ImageCardBox'
import {  productData} from  '../../seaction/ProductData'
import HeadingTitle from '../HeadingTitile'
const productTitle = 'Our Products'
const Product = () => {

  return (
    <div className='sec_padding'>
      <div className="container">
        <HeadingTitle
         title={productTitle}
         titleClass = 'mb-[1em]'
        />
      <div className="grid  lg:grid-cols-4 md:grid-cols-2 gap-4 ">
      {productData.map((product, index) => (
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
    </div>
  )
}

export default Product

