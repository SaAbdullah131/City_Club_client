import { useForm } from 'react-hook-form';
import React from 'react';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { AuthContext } from '../../../Provider/AuthProvider';


const AddAClass = () => {
  
    const { user } = useContext(AuthContext);

    const [axiosSecure] = UseAxiosSecure();


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const className = form.className.value;
        const classImage = form.classImage.value;
        const coachName = form.coachName.value;
        const coachEmail = form.coachEmail.value;
        const availableSeats = form.availableSeats.value;
        const price = form.price.value;
        const studentNumber = 0;
        const status = "pending";
        const newClass = { className, classImage, coachName, coachEmail, availableSeats, price, studentNumber, status };
        axiosSecure.post('/classes', newClass)
        .then(data => {
            if(data.data.insertedId){
                form.reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class added successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
        
    }
    return (
        <div>
            <div className="text-center">
                <h1 className="text-3xl mb-6 font-bold ">Add A Session</h1>
            </div>
            <div className="card shadow-2xl  border-t-2">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control ">
                        <label className="label ">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input name="className" type="text" placeholder="Session name" className="input input-bordered" />
                    </div>
                    <div className="form-control ">
                        <label className="label ">
                            <span className="label-text ">Session Image</span>
                        </label>
                        <input name="classImage" type="text" placeholder="Session image url" className="input input-bordered" />
                    </div>
                    <div className="form-control ">
                        <label className="label ">
                            <span className="label-text">Coach Name</span>
                        </label>
                        <input name="coachName" type="text" defaultValue={user?.displayName} disabled className="input input-bordered" />
                    </div>
                    <div className="form-control ">
                        <label className="label ">
                            <span className="label-text ">Coach Email</span>
                        </label>
                        <input name="coachEmail" type="email" defaultValue={user?.email} disabled className="input input-bordered" />
                    </div>
                    <div className="form-control ">
                        <label className="label ">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <input name="availableSeats" type="number" placeholder="available seats" className="input input-bordered" />
                    </div>
                    <div className="form-control ">
                        <label className="label ">
                            <span className="label-text">Price</span>
                        </label>
                        <input name="price" type="number" placeholder="price" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input className={dark ? "primary-btn-filled" : "primary-btn-filled-light"} type="submit" value="Add Session" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAClass;