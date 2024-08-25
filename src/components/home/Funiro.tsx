import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { roomData } from '../../seaction/Page';

const Funiro = () => {
    return (
        <div className='sec_padding'>
            <div className="container">
                <div className="wrap">
                    <div className="singleBox  gap-4">
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                        >
                            <Masonry>
                                {roomData.imageGrid.map((item, index) => (
                                    <div key={index} className="">
                                       <img src={`/${item}`} alt={`Room ${index + 1}`} className="" />
                                    </div>
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Funiro;
