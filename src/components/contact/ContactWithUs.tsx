import React from 'react'
import  {roomData} from '../../seaction/Page'
const ContactWithUs = () => {
  const {contactus} = roomData

  return (
    <section className='sec_padding'>
       <div className="container">
         <div className="flex justify-center items-center flex-col max-w-[604px] m-auto">
            <h1 className='text-[36px] leading-[54px] font-semibold	text-black '> {contactus.title} </h1>
            <p className='text-[16px] leading-6	font-normal text-[#9F9F9F] text-center mt-4 '> {contactus.subtittle}</p>
         </div>
       </div>
    </section>
  )
}

export default ContactWithUs
