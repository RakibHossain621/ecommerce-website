import React from 'react'
import ProductsDetiles from '../components/ProductsDetiles'
import ProductBanner from '../components/Products/ProductBanner'
import ProductDescription from '../components/Products/ProductDescription'
import RelitiveProduct from '../components/Products/RelitiveProduct'
import ComparisonProduct from '../components/comparison/ComparisonProduct'
import Gotoproduct from '../components/comparison/GotoProduct'
import ComparisonBanner from '../components/comparison/ComparisonBanner'

const About = () => {
  return (
    <div>
      <ProductBanner/>
     <ProductsDetiles/>
     <ProductDescription/>
     <RelitiveProduct/>
     {/* <ComparisonBanner/>
     <Gotoproduct/>
     <ComparisonProduct/> */}
    </div>
  )
}

export default About
