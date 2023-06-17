import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../../Shared/Navbar/Navbar';
import Footer from '../../../Shared/Footer/Footer';

const Home = () => {
    const location = useLocation();
   
    return (
        <div>
             <Navbar></Navbar> 
            <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Home;