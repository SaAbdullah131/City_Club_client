import React, { useContext } from 'react';
import {Outlet} from 'react-router-dom';
import  { ThemeContext } from '../Provider/ThemeProvider';

const Dashboard = ()=> {
    const {dark} = useContext(ThemeContext);
    return (
        <div className={dark ? "dark":""}>
            <div>
                <div className='w-full p-3'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>

        )
}

export default Dashboard;