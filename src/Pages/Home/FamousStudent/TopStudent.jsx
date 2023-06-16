import React from 'react';
import Marquee from "react-fast-marquee";
import { Helmet } from 'react-helmet-async';

const TopStudent = ({ topStudent }) => {
    const { name, profileImg, levelOfPlayingField } = topStudent;
    return (
        <div>
            <Helmet>
                <title>City Club || Home</title>
            </Helmet>
            <div className="card  w-96 bg-green-100 shadow-xl">
                <figure><img className='rounded-2xl' src={profileImg} alt="" /></figure>
                <div className="card-body text-center font-semibold border-s-3 border-e-3 border-blue-500">
                    <h2 className="text-xl text-center">{name}</h2>
                    <p>Level of Played: <br />{levelOfPlayingField}</p>
                    
                </div>
            </div>
        </div>
    )
};

export default TopStudent;