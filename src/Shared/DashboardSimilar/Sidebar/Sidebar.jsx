import React, { useState } from 'react';
import useAdmin from '../../../Hooks/useAdmin';
import useCoaches from '../../../Hooks/useCoaches';
import { FaUser,FaBars,FaClipboardCheck, FaClipboardList, FaChevronCircleLeft, FaCreditCard, FaChalkboardTeacher, FaBookOpen} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import AdminDashboard from '../../../Pages/Dashboard/AdminDashboard/AdminDashboard';
import StudentDashboard from '../../../Pages/Dashboard/StudentDashboard/StudentDashboard';

const Sidebar = () => {
    const[open,setOpen] = useState(false);
    const [isAdmin] = useAdmin();
    const [isCoach] = useCoaches();

    return (
        <div className='w-full md:w-3/12 bg-blue-500 text-black mt-4 pt-3 p-4'>
            <button onClick={()=>setOpen(!open)} className='btn btn-circle'>
                {
                    open ? <FaChevronCircleLeft></FaChevronCircleLeft>:<FaBars></FaBars>
                }
            </button>
            <div className={open ? 'rounded-md p-3 z-10 mt-2': "hidden md:flex md:flex-col"}>
                <div className='flex flex-col gap-1 p-2 text-white font-semibold'>
                {
                    isAdmin ? <>
                        <NavLink to={`/dashboard/admin`}className='flex items-center gap-2'><FaUser></FaUser>Admin Home</NavLink>
                        <NavLink to={`/dashboard/manage-session`} className='flex items-center gap-2'><FaClipboardList></FaClipboardList>Manage Session</NavLink>
                        <NavLink to={`/dashboard/manage-user`}className='flex items-center gap-2'><FaClipboardCheck></FaClipboardCheck>Manage User</NavLink>
                    </>:isCoach ? <>
                        <NavLink to={`/dashboard/coaches`}className='flex items-center gap-2'><FaUser></FaUser>Coaches Home</NavLink>
                        <NavLink to={`/dashboard/my-session`}className='flex items-center gap-2'><FaClipboardList></FaClipboardList>My Session</NavLink>
                        <NavLink to={`/dashboard/add-a-session`}className='flex items-center gap-2'><FaClipboardCheck></FaClipboardCheck>Add A Session</NavLink>
                    </>:<>
                       
                        <NavLink to={`/dashboard/student`}className='flex items-center gap-2'><FaUser></FaUser>Student Home</NavLink>
                        <NavLink to={`/dashboard/my-enroll-session`}className='flex items-center gap-2'><FaClipboardCheck></FaClipboardCheck>My Enroll Session</NavLink>
                        <NavLink to={`/dashboard/my-selected-session`}className='flex items-center gap-2'><FaClipboardList></FaClipboardList>My Selected Session</NavLink>
                        <NavLink to={`/dashboard/payment-history`}className='flex items-center gap-2'><FaCreditCard></FaCreditCard>My Payment History</NavLink>
                    </>
                }
                </div>
                <div className='flex-col flex mt-2 text-white font-bold'>
                    <NavLink to='/' className='flex items-center gap-2'><FaUser></FaUser>Home</NavLink>
                    <NavLink to='/allcoach'className='flex items-center gap-2'><FaChalkboardTeacher></FaChalkboardTeacher>Coaches</NavLink>
                    <NavLink to='/session'className='flex items-center gap-2'><FaBookOpen></FaBookOpen>Session</NavLink>

                </div>
            </div> 
        </div>
    );
};

export default Sidebar;