import React from 'react'
const productBanner = [
    { label: 'Home' },
    { label: 'Shop' },
    { label: 'Asgaard sofa' }
];
const ProductBanner = ({separator = '>'}) => {
  return (
    <div className=' bg-[#9F9F9F]'>
     <div className="container">
     <div className='flex gap-5'>
        {
          productBanner.map((product,index)=>(
            <div key={index}>
               {product.label}
               
               <span className={` ${index === 2 ?  'hidden' : '' } `}> {separator} </span>
            </div>
          ))  
        }
     </div>
     </div>
    </div>
  )
}

export default ProductBanner
