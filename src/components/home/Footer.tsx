import React from 'react';
import { roomData } from '../../seaction/Page';

const Footer = () => {
    const { footer } = roomData;

    return (
        <footer className="sec_padding">
            <div className="container">
                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-center md:text-left">
                    <div className="mt-8 md:mt-0">
                        <h2 className="text-2xl font-bold text-black mb-2">{footer.title}</h2>
                        <p className="text-base text-gray-600 max-w-xs mx-auto md:mx-0 mt-8">{footer.subtitle}</p>
                    </div>
                    <div>
                        <h3 className="text-base font-medium text-gray-600 mb-2">{footer.footerLeft[0]}</h3>
                        <ul className="mt-8 space-y-4">
                            {footer.footerLeft.slice(1).map((link, index) => (
                                <li key={index} className="text-base text-black mb-1 hover:underline cursor-pointer">
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-base font-medium text-gray-600 mb-2">{footer.footerRight[0]}</h3>
                        <ul className="mt-8 space-y-4">
                            {footer.footerRight.slice(1).map((link, index) => (
                                <li key={index} className="text-base text-black mb-1 hover:underline cursor-pointer">
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <h3 className="text-base font-medium text-gray-600 mb-4">{footer.inputtext.title}</h3>
                        <form className="flex flex-col md:flex-row items-center md:items-start gap-2">
                            <input
                                type="email"
                                placeholder={footer.inputtext.inputText}
                                className="p-2 border-b border-black outline-none flex-grow"
                            />
                            <button className="text-sm font-medium text-black mt-2 md:mt-0">
                                <span className="border-b border-black pb-1">{footer.inputtext.btnText}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
