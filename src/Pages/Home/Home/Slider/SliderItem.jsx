import React, { useContext } from 'react';
import { Zoom } from 'react-awesome-reveal';

const SliderItem = ({ heading, subHeading, img }) => {

    return (
        <div className="flex md:flex-row flex-col gap-4 justify-between items-center p-4">
            <div className="md: w-1/2 text-left">
                <h1 className='text-cyan-400 text-5xl font-bold'>{heading}</h1>
                <p className='mt-5 mb-8 text-xl'>{subHeading}</p>
                <Zoom>
                    <button className='btn btn-info'>Explore !!</button>
                </Zoom>
            </div>
            <img src={img} className='md:w-1/2 max-h-[290px] md:max-h[450px]' />
        </div>
    )
};

export default SliderItem;