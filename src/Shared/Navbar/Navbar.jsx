import React, { useContext, useState } from 'react';
import logo from '../../assets/city_club_logo.jpg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { MdDarkMode } from 'react-icons/Md';
import { Helmet } from "react-helmet-async";
// import { DarkModeSwitch } from 'react-toggle-dark-mode';


const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = (checked) => {
        setDarkMode(checked)
    };

    const navOptions = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allcoaches'>All Coaches</Link></li>
        <li><Link to='/session'>Session</Link></li>
        {
            user ?
                <>
                    <li><Link>Dashboard</Link></li>
                    <img src="" />
                </> :
                ''
        }
    </>
    return (
        <>
            <Helmet>
                <title>City Club || Home </title>
            </Helmet>
            <div>
                <div className="navbar bg-green-400 text-white font-bold mt-2 rounded-xl shadow-lg">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 ">
                                {navOptions}
                            </ul>
                        </div>
                        <img className='w-[60px] h-[50px] rounded-2xl' src={logo} alt="city club logo" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {/* <DarkModeSwitch
                            style={{ marginBottom: '2rem' }}
                            checked={isDarkMode}
                            onChange={toggleDarkMode}
                            size={120}
                        /> */}
                        {
                            user ?
                                <Link to='/'>
                                    <button className='btn bg-green-500 text-white uppercase'>LogOut</button>
                                </Link> :
                                <Link to='/login'>
                                    <button className='btn bg-green-500 text-white uppercase'>Login</button>
                                </Link>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;