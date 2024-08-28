import React from 'react'
import Banner from '../Banner'
import {roomData} from '../../seaction/Page'
const ContactBanner = () => {
    const {contact} = roomData
  return (
    <div>
      <Banner
        img={contact.img}
        title={contact.title}
        subtitle= {contact.subtitle}
        subtitle1= {contact.subtitle1}
      />
    </div>
  )
}

export default ContactBanner
