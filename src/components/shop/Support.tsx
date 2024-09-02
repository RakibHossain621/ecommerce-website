import React from 'react';
import { roomData } from '../../seaction/Page';

const Support = () => {
    const { support } = roomData; 

    return (
        <section className="sec_padding bg-[#FAF3EA] ">
            <div className="container ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {support.map((item, index) => (
                        <div key={index} className="single">
                            <div className="icon  flex    gap-3">
                                {item.trophyIcon || item.warrntyIcon || item.shippingIcon || item.CustomerSupportIcon}
                                <div>
                                <h3 className=" text-[21px] leading-[37.5px] text-[#242424] ">{item.title}</h3> 
                                <p className="text-[16px] leading-7 font-medium text-[#898989]">{item.subtitle}</p>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Support;







