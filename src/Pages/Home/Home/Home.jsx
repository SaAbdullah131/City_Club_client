import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../../Shared/Navbar/Navbar';
import Footer from '../../../Shared/Footer/Footer';

const Home = () => {
    const location = useLocation();
    const hideHeaderFooter = location.pathname.includes('login');
    const hideHeaderFooterInRegister = location.pathname.includes('register');
    return (
        <div>
            { (hideHeaderFooter || hideHeaderFooterInRegister) || <Navbar></Navbar> }
            <Outlet></Outlet>
           { (hideHeaderFooter || hideHeaderFooterInRegister) ||  <Footer></Footer> }
        </div>
    );
};

export default Home;