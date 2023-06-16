import React, { useContext, useState } from 'react';
import logo from '../../assets/city_club_logo.jpg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import{FaMoon} from 'react-icons/fa';
import {FiSun} from 'react-icons/fi';
import { Helmet } from "react-helmet-async";
import { ThemeContext } from '../../Provider/ThemeProvider';
import UseAdmin from '../../Hooks/UseAdmin';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'

// import { DarkModeSwitch } from 'react-toggle-dark-mode';


const Navbar = () => {
    const { user,logOut,loading} = useContext(AuthContext);
    const {handleToggleTheme,dark} = useContext(ThemeContext);
    const [isDarkMode, setDarkMode] = useState(false);

    const [isAdmin] = UseAdmin();

    const handleLogOut = () => {
            logOut()
            .then(()=>{})
            .catch(error=>{
                swal.fire('Log Out Does Not Work')
            })
    }
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
                    <li><Link to='/dashboard'>Dashboard</Link></li>
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
                    <div className="navbar-end gap-2">
                        <button onClick={()=>handleToggleTheme()}>{dark ?<FiSun></FiSun>:<FaMoon></FaMoon>}</button>
                        {
                            user && <>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            {
                                                !loading && <>
                                                    <img className={user.displayName ? 'user-img-tooltip' : ''} src={user.photoURL ? user?.photoURL : 'https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg'} />
                                                    <Tooltip
                                                    style={{
                                                            backgroundColor: "#1B9C85",
                                                    }}
                                                        anchorSelect='.user-img-tooltip'
                                                        content={user?.displayName}
                                                        place='left'
                                                    ></Tooltip>
                                                </>
                                            }
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-4 p-2 bg-back text-tex rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                       
                                    </ul>
                                </div>
                            </>
                }
                        {
                            user ?
                                <Link to='/'>
                                    <button onClick={handleLogOut} className='btn bg-green-500 text-white uppercase'>LogOut</button>
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