import React from 'react';
import cn from 'classnames';

const HeadingTitle = ({ className, titleClass, subtitleClass, title, subtitle }) => {
  return (
    <div className={cn('heading text-center', className)}>
      <h1 className={cn('text-[32px] leading-[48px] font-bold text-black', titleClass)}>{title}</h1>
      <p className={cn('text-[20px] leading-8 text-[#666666]', subtitleClass)}>{subtitle}</p>
    </div>
  );
};

HeadingTitle.defaultProps = {
  className: '',
  titleClass: '',
  subtitleClass: '',
  subtitle: '' ,
  title : ''
};

export default HeadingTitle;
