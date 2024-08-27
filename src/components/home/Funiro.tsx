import React from 'react';
import { roomData } from '../../seaction/Page';
import HeadingTitle from '../HeadingTitile';

const Funiro = () => {
    const {funtiro} = roomData
    return (
        <div className="sec_padding hidden md:hidden xl:block lg:block">
            <HeadingTitle
                title={funtiro.title}
                subtitle={funtiro.subtitle}
                titleClass = 'text-[20px] leading-7 font-[400] text-[#616161]'
                subtitleClass = 'text-[40px] font-[700] text-[#3A3A3A] leading-[48px]'
            />
           <div className="wrapper flex border-b border-[#00000038] pb-32 ">
              <div className="single1 w-[33.33%]">
                <img className='w-[94px] lg:h-[382px] h-[298px] ' src="/funiro1.png" alt="img1" />
                <img className='lg:w-[85%]  2xl:w-[406px] lg:h-[286px] ml-[112px] mt-[-18em] ' src="/funiro2.png" alt="img2" />
                <img className ='w-[169px] lg:h-[323px] h-[227px] mt-[19px] ' src="/funiro6.png" alt="img6" />
                <img className ='w-[67%] lg:h-[242px] ml-[187px] mt-[-213px] lg:mt-[-329px] ' src="/funiro7.png" alt="img7" />
              </div>
              <div className='single2 w-[33.33%]'>
                <img className='w-[71%]  h-[392px] ml-[62px] mt-[154px] ' src="/funiro3.png" alt="img3" />
              </div>
              <div className='single3 w-[33.33%]'>
               <img className='w-[55%] h-[348px] mt-[88px] ml-[-47px] xl-xl:ml-[-62px]' src="/funiro4.png" alt="img4" />
               <img className='w-[240px] h-[433px] ml-[218px] mt-[-433px]' src="/funiro5.png" alt="img5" />
               <img className='w-[178px] h-[242px] ml-[-45px] mt-[15px]' src="/funiro8.png" alt="img8" />
               <img className='w-[253px] h-[196px] ml-[162px] mt-[-241px] ' src="/funiro9.png" alt="img9" />
              </div>
           </div>
        </div>
    );
};

export default Funiro;


