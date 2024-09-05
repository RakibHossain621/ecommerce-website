import React from 'react'
import Banner from '../Banner'
import { roomData } from '../../seaction/Page'
const ComparisonBanner = () => {
    const {productComparison} = roomData
  return (
    <div>
      <Banner
       img={productComparison.img}
       title={productComparison.title}
       subtitle={productComparison.subtitle}
       subtitle1={productComparison.subtitle1}
      />
    </div>
  )
}

export default ComparisonBanner
