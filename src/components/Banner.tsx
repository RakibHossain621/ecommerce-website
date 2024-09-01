import cn from 'classnames';
import React from 'react';

const Banner = ({ img, imageClass, title, subtitle, titleClass, subtitle1, subtitleClass, separator = '>' }) => {
    return (
        <div className="bg-[url('/banner.png')] bg-cover bg-center py-12">

            <div className='text-center cursor-pointer'>
                {img && (
                    <div className='flex justify-center'>
                        <img className={cn('w-[65px]', imageClass)} src={img} alt="img" />
                    </div>
                )}
                <h1 className={cn('text-[48px] leading-[72px] font-medium text-[#000000]', titleClass)}>
                    {title}
                </h1>
                {subtitle && (
                    <div className=' flex justify-center gap-[10px]'>
                        <p className={cn('text-[16px] leading-6 font-medium text-[#000000]', subtitleClass)}>
                            {subtitle}   {separator}
                        </p>
                        <span className={cn('text-[16px] leading-6 font-medium text-[#000000]', subtitleClass)}>
                            {subtitle1}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};
Banner.defaultProps = {
    title: '',
    subtitle: '',
    titleClass: '',
    subtitle1: '',
    subtitleClass: '',
    img: '',
    imageClass: '',
}
export default Banner;
