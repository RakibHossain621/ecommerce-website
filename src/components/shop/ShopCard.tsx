import React from 'react';
import { roomData } from '../../seaction/Page';
import ImageCardBox from '../ImageCardBox';

export const ShopCard = () => {
    const { shopCard, pagention } = roomData;
    return (
        <div className='shop sec_padding'>
            <div className=" container">
                <div className=" grid  lg:grid-cols-4 md:grid-cols-2 gap-4">
                    {shopCard.map((item, index) => (
                        <ImageCardBox
                            key={index}
                            productName={item.productName}
                            productImage={item.productImage}
                            discount={item.discount}
                            isNew={item.isNew}
                            oldPrice={item.oldPrice}
                            price={item.price}
                            subtitle={item.subtitle}
                        />
                    ))}
                </div>
                <div className="pagination flex justify-center gap-9 mt-[3.75rem]">
            {pagention.map((page, index) => (
                <button
                    key={index}
                    className={`w-[50px] h-[50px] text-[22px] font-normal rounded-[10px] mx-1 ${page === '1' ? 'bg-[#A67C00] text-white' : 'bg-[#F9F1E7] text-black'} hover:bg-[#e0d3c0] transition-colors duration-200`}
                    style={{
                        width: page === '4' ? '50px' : '60px',
                        height: page === '4' ? '50px' : '60px',
                    }}
                >
                    {page}
                </button>
            ))}
        </div>
            </div>
        </div>
    );
};

export default ShopCard;
