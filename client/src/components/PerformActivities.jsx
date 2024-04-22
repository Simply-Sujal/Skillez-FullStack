import React from 'react';

const DestinationData = ({ className, heading, text, img1, img2 }) => {
    return (
        <div className={className}>
            <div className='des-txt'>
                <h2 className='font-karla font-bold text-blue-500 text-3xl uppercase'>{heading}</h2>
                <p className="font-monts text-[18px] text-black dark:text-white text-justify">{text}</p>
            </div>
            <div className='image'>
                <img src={img1} alt="tokyotowerimg" />
                <img src={img2} alt="tokyotoweimg" />
            </div>
        </div>
    );
};

export default DestinationData;
