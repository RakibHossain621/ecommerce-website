import React from 'react';
import { roomData } from '../../seaction/Page';

const Footer = () => {
    const { footer } = roomData;

    return (
        <footer className=" sec_padding  ">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-[24px] font-bold leading-9 text-[#000000]  mb-2">{footer.title}</h2>
                        <p className="text-[16px] leading-6 font-normal	text-[#9F9F9F] max-w-[200px] mt-8 ">{footer.subtitle}</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-[12em]">
                        <div>
                            <h3 className=" text-[16px] font-medium	leading-6	text-[#9F9F9F] mb-2">{footer.footerLeft[0]}</h3>
                            <ul className='mt-8 space-y-8'>
                                {footer.footerLeft.slice(1).map((link, index) => (
                                    <li key={index} className="text-[16px] leading-6 font-medium text-[#000000]	 mb-1 hover:underline cursor-pointer">
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[16px] font-medium	leading-6	text-[#9F9F9F] mb-2">{footer.footerRight[0]}</h3>
                            <ul className='mt-8 space-y-8'>
                                {footer.footerRight.slice(1).map((link, index) => (
                                    <li key={index} className="text-[16px] leading-6 font-medium text-[#000000] mb-1 hover:underline cursor-pointer">
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="">
                        <h3 className="text-[16px] font-medium	leading-6	text-[#9F9F9F] mb-4">{footer.inputtext.title}</h3>
                        <form className="flex flex-col sm:flex-row">
                            <input
                                type="email"
                                placeholder={footer.inputtext.inputText}
                                className="p-2 border-b border-black outline-none sm:mr-4"
                            />
                            <button className="text-[14px] font-medium	leading-[21px] text-black ">
                              <span className='border-b border-black '>{footer.inputtext.btnText}</span>
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
