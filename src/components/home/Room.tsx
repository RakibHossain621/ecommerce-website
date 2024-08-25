import React from 'react';
import { roomData } from '../../seaction/Page';

const Room = () => {
    return (
        <section className='sec_padding bg-[#FCF8F3]'>
            <div className="container">
                <div className="md:flex gap-4">

                    <div className="md:w-[50%] w-full flex justify-center flex-col ">
                        <h1 className="text-[40px] font-bold text-[#3A3A3A] leading-[48px] mb-4">{roomData.title}</h1>
                        <p className="text-[16px] leading-6 font-medium	text-[#616161] max-w-[432px]	 mb-6">{roomData.subtitile}</p>
                        <div>
                            <button className="bg-[#B88E2F] text-[16px] leading-6	 text-white font-medium	 py-3 px-6 rounded">
                                {roomData.btnText}
                            </button>
                        </div>
                    </div>


                    <div className="flex gap-4 md:w-[50%] w-full md:mt-0 lg:mt-0 mt-8  ">
                        {roomData.right.map((item, index) => (
                            <div key={index} className="reative overflolw-hidden rounded-md">
                                <img
                                    src={item.img}
                                    alt={`Room ${index + 1}`}
                                    className=""
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Room;
