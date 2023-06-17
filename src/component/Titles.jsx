import React from 'react';
import { Slide, Fade } from "react-awesome-reveal";

const Titles = ({img, heading, subHeading}) => {
    return (
        <div className='flex flex-col justify-center items-center mt-14 mb-12 text-center  mb:p-10 p-3'>
           <Slide cascade>
                <img className='max-w-[100px]' src={img} />
            </Slide>
                <Fade cascade>
                    <h1 className='text-black text-5xl font-bold mb-3'>{heading}</h1>
                    <p className='text-2xl'>{subHeading}</p>
                </Fade>
        </div>
    );
};

export default Titles;