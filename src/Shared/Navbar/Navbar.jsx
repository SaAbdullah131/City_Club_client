import React from 'react';
import logo from '../../assets/city_club_logo.jpg';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const navOptions = <>
        <li><Link>Home</Link></li>
        <li><Link>All Coaches</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-green-400 text-white font-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 ">
                            {navOptions}
                        </ul>
                    </div>
                    <img className='w-[50px] h-[40px]' src={logo} alt="city club logo" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        <button className='btn bg-green-500 text-white uppercase'>Login</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;