import React, { useContext } from 'react';
import {Outlet} from 'react-router-dom';
import  { ThemeContext } from '../Provider/ThemeProvider';
import Sidebar from '../Shared/DashboardSimilar/Sidebar/Sidebar';

const Dashboard = ()=> {
    const {dark} = useContext(ThemeContext);
    return (
        <div className={dark ? "dark":""}>
            <div>
                <Sidebar></Sidebar>
                <div className='w-full p-3'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>

        )
}

export default Dashboard;