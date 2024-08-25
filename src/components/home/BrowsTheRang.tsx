import React from 'react'
import HeadingTitle from '../HeadingTitile'
import {BrowsTheRangData} from '../../seaction/BrowsTheRangeData'

const BrowsTheRang = ({}) => {
  return (
    <div className='sec_padding'>
       <div className='container'>
        <HeadingTitle
         title={BrowsTheRangData.title}
        subtitle={BrowsTheRangData.subtitle}
        />
         <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-8'>
          {BrowsTheRangData.browrangImage.map((item, index) => (
            <div key={index} className='text-center'>
              <img src={item.img} alt={item.title} className='' />
              <h3 className='mt-4 font-semibold'>{item.title}</h3>
            </div>
          ))}
        </div>
       </div>
    </div>
  )
}

export default BrowsTheRang
