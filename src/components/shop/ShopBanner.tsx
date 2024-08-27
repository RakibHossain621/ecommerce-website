import React from 'react'
import Banner from '../Banner'
import {roomData} from '../../seaction/Page'
const ShopBanner = () => {
    const {shop} = roomData
  return (
    <div>
      <Banner
       title={shop.title}
       subtitle= {shop.subtitle}
       subtitle1= {shop.subtitle1}
      />
    </div>
  )
}

export default ShopBanner
