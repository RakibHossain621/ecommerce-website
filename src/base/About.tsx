import React from 'react'
import ProductsDetiles from '../components/ProductsDetiles'
import ProductBanner from '../components/Products/ProductBanner'
import ProductDescription from '../components/Products/ProductDescription'
import RelitiveProduct from '../components/Products/RelitiveProduct'
import ComparisonProduct from '../components/comparison/ComparisonProduct'
import Gotoproduct from '../components/comparison/GotoProduct'
import ComparisonBanner from '../components/comparison/ComparisonBanner'
import Cart from '../components/cartItem/Cart'
import Checkout from '../components/comparison/checkout/Checkout'
import WhyHire from '../components/comparison/WhyHire'
import KeyFeatures from '../components/comparison/KeyFeatures'
import ServiceGrid from '../components/ServiceGrid'


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
     {/* <Checkout/> */}
     {/* <Cart/> */}
     {/* <WhyHire/> */}
     {/* <KeyFeatures/> */}
     {/* <ServiceGrid/> */}
    </div>
  )
}

export default About
