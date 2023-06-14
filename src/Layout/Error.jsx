import React from 'react';
import errorImg from '../assets/city_club_404.gif';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={errorImg} alt="ErrorPage" />
            <Link to='/'><button className="btn bg-green-400 text-white">BackToHome</button></Link>
        </div>
    );
};

export default Error;