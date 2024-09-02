import React from 'react';
import { roomData } from '../../seaction/Page';
import cn from 'classnames';

const PagenitionButton = ({ pagentionClass }) => {
    const { pagention } = roomData;

    return (
        <div className={cn("pagination flex justify-center gap-9 mt-[3.75rem]", pagentionClass)}>
            {pagention.map((page, index) => (
                <button
                    key={index}
                    className={`w-[50px] h-[50px] text-[22px] font-normal rounded-[10px] mx-1 ${page === '1' ? 'bg-[#A67C00] text-white' : 'bg-[#F9F1E7] text-black'} hover:bg-[#e0d3c0] transition-colors duration-200`}
                    style={{
                        width: index === 3 ? '80px' : '50px',
                    }}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

PagenitionButton.defaultProps = {
    pagentionClass: '',
};

export default PagenitionButton;
