import React, { useContext,useEffect,useState} from 'react';
import {  FaSortAmountUp } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../Provider/AuthProvider';


const MyClasses = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);

    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        fetch(`https://summer-camp-school-server-inky.vercel.app//my-session?email=${user.email}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);


    return (
        <div>
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center underline">
                <h3 className="text-3xl">Total Number of Class: {items.length}</h3>
            </div>
            <div className="overflow-x-auto w-full border rounded-lg mt-5">
                <table className="table w-full ">
                    {/* head */}
                    <thead className='dark:text-slate-200'>
                        <tr>
                            <th>#</th>
                            <th>class Image</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Students</th>
                            <th>Status</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        {
                            items.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.classImage} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.className}
                                </td>
                                <td className="text-center">${item.price}</td>
                                <td className="text-center">{item.studentNumber}</td>
                                <td>
                                    {
                                        item.status === "approved" ? 
                                            <div className="badge badge-accent">approved</div> 
                                            : item.status == "pending" ? 
                                                <div className="badge badge-primary">pending</div> : <div className='flex flex-col gap-1'><div className="badge badge-secondary">denied</div><br /><p className='dark:text-slate-300'>{item?.feedback}</p></div>

                                    }
                                </td>
                                <td>
                                    <button className="btn btn-ghost bg-orange-600  text-white"><FaSortAmountUp></FaSortAmountUp></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;