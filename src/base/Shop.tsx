import React from 'react'
import ShopBanner from '../components/shop/ShopBanner'
import FilterPage from '../components/shop/FilterPage'
import ShopCard from '../components/shop/ShopCard'
import Support from '../components/shop/Support'

const Shop = () => {
  return (
   
      <div className="">
        <ShopBanner/>
        <FilterPage/>
        <ShopCard/>
        <Support/>
    </div>
  )
}

export default Shop
