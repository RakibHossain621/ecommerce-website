import React from 'react'
import ProductsDetiles from '../components/ProductsDetiles'
import ProductBanner from '../components/Products/ProductBanner'
import ProductDescription from '../components/Products/ProductDescription'
import RelitiveProduct from '../components/Products/RelitiveProduct'

const About = () => {
  return (
    <div>
      <ProductBanner/>
     <ProductsDetiles/>
     <ProductDescription/>
     <RelitiveProduct/>
    </div>
  )
}

export default About
