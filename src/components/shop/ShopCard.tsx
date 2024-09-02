import React from 'react';
import { roomData } from '../../seaction/Page';
import ImageCardBox from '../ImageCardBox';
import PagenitionButton from './PagenitionButton';

export const ShopCard = () => {
    const { shopCard, pagention } = roomData;
    console.log(pagention.map((page)=>page))
   
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
               <PagenitionButton/>
            </div>
        </div>
    );
};

export default ShopCard;
