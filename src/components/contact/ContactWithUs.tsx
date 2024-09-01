import React from 'react';
import { roomData } from '../../seaction/Page';

const ContactWithUs = () => {
  const { contactus } = roomData;

  return (
    <section className="sec_padding">
      <div className="container">
       
        <div className="flex justify-center items-center flex-col  m-auto">
          <h1 className="md:text-[36px] text-[28px] leading-[54px] font-semibold text-black">
            {contactus.title}
          </h1>
          <p className="text-[16px] leading-6 font-normal text-[#9F9F9F] max-w-[604px] text-center mt-4">
            {contactus.subtittle}
          </p>
        </div>

      
        <div className="flex flex-col md:flex-row justify-center items-start mt-12">
           {/* left section */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0 space-y-6">
            {contactus.contactUsLeft.map((item, index) => (
              <div className="flex items-start" key={index}>
                <span className="mr-4 text-lg">{item.LocationIcon || item.CallIcon || item.clockIcon}</span>
                <div>
                  <p className="text-[24px] font-medium leading-9	text-black">{item.title}</p>
                  <p className='text-[16px] leading-6 font-normal text-black	 '>{item.subtitle}</p>
                  {item.subtitle1 && <p>{item.subtitle1}</p>}
                </div>
              </div>
            ))}
          </div>

           {/* right section */}
          <div className="md:w-1/2 w-full md:ml-8">
            <form className="space-y-6">
              {contactus.contactright.map((placeholder, index) => (
                <div key={index}>
                  <label htmlFor={placeholder} className="text-[16px] font-medium leading-6	text-black">
                    {placeholder}
                  </label>
                  {placeholder === 'Message' ? (
                    <textarea
                      id={placeholder}
                      rows={4}
                      className="mt-4 block w-full py-8 px-8 border rounded-lg"
                      placeholder={`Hi! I'd like to ask about...`}
                    ></textarea>
                  ) : (
                    <input
                      type={placeholder === 'Email address' ? 'email' : 'text'}
                      id={placeholder}
                      className="mt-4 block w-full p-3 border rounded-lg"
                      placeholder={placeholder}
                    />
                  )}
                </div>
              ))}
              <div>
              <button type="submit" className=" px-20 py-4 bg-yellow-600 text-white  rounded-lg">
                Submit
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactWithUs;
