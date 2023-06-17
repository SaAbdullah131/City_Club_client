import React, { useContext  } from 'react';
import {  useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useAdmin from '../../Hooks/UseAdmin';
import UseCoaches from '../../Hooks/UseCoaches';
import UseSelected from '../../Hooks/UseSelected';
import { Helmet } from 'react-helmet-async';



const Session = () => {
    const session = useLoaderData();
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [isAdmin] = useAdmin();
    const [isCoach] = UseCoaches();

    const [, refetch] = UseSelected();

    const handleSelectClass = item => {
        if(user && user.email){
            const { classImage, className, price, _id } = item;
            const selectItem = { selectedClassId: _id, classImage: classImage, className: className, price: price, email: user?.email }
            fetch('https://summer-camp-school-server-inky.vercel.app/session', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class selected successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else{
            Swal.fire({
                title: 'Please login to select classes.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    // TODO: Check admin
    
    return (
        <div className='min-h-screen px-4 md:px-12 mt-10 mb-12'>
            <Helmet>
                <title>All Session</title>
            </Helmet>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    session.map(item => <div
                        key={item._id}
                        className={item.availableSeats == 0 ? "card card-compact bg-red-400 shadow-xl" : "card card-compact dark:bg-[rgba(30,41,59,.6)] bg-base-100 shadow-xl border-b-2 dark:border-slate-700"}>
                        <figure ><img className='max-h-[250px] w-full' src={item.sessionImage} alt="img" /></figure>
                        <div className="card-body">
                            <h2 className="card-title  text-2xl font-bold">{item.sessionName}</h2>
                            <div className='md:text-lg font-semibold ps-3 border-e-2'>
                                <p >Instructor Name : {item.coachName}</p>
                                <p >Available Seats : {item.availableSeats}</p>
                                <p >Price : $ {item.price}</p>
                            </div>
                            <div className="card-actions justify-end">
                                    <button onClick={() => handleSelectClass(item)} disabled={item.availableSeats == 0 ? true : isAdmin ? true : isCoach ? true : false} className="secondary-btn-filled disabled:text-slate-600">Select Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Session;