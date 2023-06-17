import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import signUpImg from '../../assets/city_club_signUp.gif';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const { createUser, updateUserInfo } = useContext(AuthContext);
    const [show, setShow] = useState(false);

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();


    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(() => {
                updateUserInfo(data.name, data.photo)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('https://summer-camp-school-server-inky.vercel.app/users', {
                            method:'POST',
                            headers:{
                                'content-type':'application/json'
                            },
                            body:JSON.stringify(saveUser)
                        }).
                        then(res => res.json())
                        .then(data=>{
                            if(data.insertedId){
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Registration Successful',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/');
                            }
                        })
                        
                        navigate('/');
                    })
                    .catch(error => console.log(error));
            })
            .catch()
        reset();
    }
    const handleShow = (event) => {
        event.preventDefault();
        setShow(!show);
    }
    return (
        <>
            <Helmet>
                <title>City Club || Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-green-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card md:w-3/4 sm:w-full shadow-2xl bg-green-100">
                        <h1 className="text-2xl text-center font-bold">Sign Up now!</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body border-s-4 border-e-4 border-yellow">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="Enter Your Name" className="input input-bordered" />
                                {errors.name?.type === 'required' && <span className="text-red-500">Name  is Required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"{...register("email", { required: true })} name='email' placeholder="Enter Your Email" className="input input-bordered" />
                                {errors.email && <span className="text-red-500">Email  is Required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='join'>
                                    <input {...register("password",
                                        {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 16,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*%])/
                                        })} type={show ? 'text' : 'password'} name='password' placeholder="Enter Your Password" className="input input-bordered" />
                                    <button onClick={handleShow} className='btn btn-square'>
                                        {show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                    </button>
                                </div>
                                {
                                    errors.password?.type === 'required' && <span className="text-red-500">Password is Required</span>
                                }
                                {
                                    errors.password?.type === "minLength" && <span className="text-red-500">Password Must be 6 Character</span>
                                }
                                {
                                    errors.password?.type === "maxLength" && <span className="text-red-500">Password can not be 16 Character</span>
                                }
                                {
                                    errors.password?.type === "pattern" && <span className="text-red-500">Must Have One Uppercase and One Special Character</span>
                                }
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <div className='joint'>
                                        <input  {...register("confirmPassword", {
                                            required: true,
                                            validate: (value) => value === watch('password') || 'Password and Confirm Password do not match'
                                        })} type={show ? 'text' : 'password'} name='confirmPassword' placeholder="Enter confirm password" className="input input-bordered" />
                                        <button onClick={handleShow} className='btn btn-square'>
                                            {show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                        </button>
                                    </div>
                                    {errors.confirmPassword && <span className="text-red-500">Confirm password is Required</span>}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" {...register("photo", { required: true })} name='photo' placeholder="Enter Photo Url" className="input input-bordered" />

                                    {
                                        errors.photo?.type === 'required' && <span className="text-red-500">Photo URL is Required</span>
                                    }
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <input className='btn bg-green-400' type="submit" value="Sign Up" />
                            </div>
                            <p>Already Have an Account ? Please <Link to='/login' className='text-blue-500 font-semibold'>Login</Link></p>
                        </form>
                    </div>
                    <div>
                        <img className='h-[500px] w-[750px] sm:invisible md:visible lg:visible rounded-lg' src={signUpImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )

}

export default Register;