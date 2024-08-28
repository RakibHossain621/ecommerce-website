import React from 'react';
import { roomData } from '../../seaction/Page';

const Footer = () => {
    const { footer } = roomData;

    return (
        <footer className="sec_padding">
            <div className="container">
                <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center md:items-start  gap-8 text-center md:text-left lg:text-left border-b	border-[#D9D9D9] pb-8">
                    <div className="mt-8 md:mt-0 md:w-[47%]">
                        <h2 className="text-2xl font-bold text-black mb-2">{footer.title}</h2>
                        <p className=" text-[16px] leading-6 font-normal text-[#9F9F9F] max-w-[200px] mt-8">{footer.subtitle}</p>
                    </div>
                    <div className='w-[47%]'>
                        <h3 className=" text-[16px] font-medium	leading-6 text-[#9F9F9F]  mb-2">{footer.footerLeft[0]}</h3>
                        <ul className="mt-8 space-y-6">
                            {footer.footerLeft.slice(1).map((link, index) => (
                                <li key={index} className=" text-[16px] font-medium	leading-6 text-[#000000]  mb-1 hover:underline cursor-pointer">
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='w-[47%]'>
                        <h3 className=" text-[16px] font-medium	leading-6 text-[#9F9F9F]  mb-2">{footer.footerRight[0]}</h3>
                        <ul className="mt-8 space-y-6">
                            {footer.footerRight.slice(1).map((link, index) => (
                                <li key={index} className="text-[16px] font-medium	leading-6 text-[#000000] mb-1 hover:underline cursor-pointer">
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-8 md:mt-0 ">
                        <h3 className=" text-[16px] font-medium	leading-6 text-[#9F9F9F]  mb-4">{footer.inputtext.title}</h3>
                        <form className="flex flex-col md:flex-row items-center gap-2">
                            <input
                                type="email"
                                placeholder={footer.inputtext.inputText}
                                className="p-2 border-b border-black outline-none flex-grow"
                            />
                            <button className="text-sm font-medium text-black mt-2 md:mt-0">
                                <span className="border-b border-black pb-[10px]">{footer.inputtext.btnText}</span>
                            </button>
                        </form>
                    </div>
                </div>
                <p className='text-[16px] font-normal leading-6 text-black mt-8 '>2023  furino. All rights reverved</p>
            </div>
        </footer>
    );
};

export default Footer;
