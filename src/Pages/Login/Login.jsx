import { useForm } from 'react-hook-form';
import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import loginImage from '../../assets/city_club_login.gif';


const Login = () => {
    const { signIn, logInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // handle form submit
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(() =>{
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })

    };
    // login with google
    const handleGoogleLogin = () => {
        logInWithGoogle()
            .then((result) => {
                const loggedUser = result.user;
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email };
                fetch('https://summer-camp-school-server-inky.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Login Successful',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate(from, { replace: true });
                    })
            })
    }

    // password show button
    const [show, setShow] = useState(false);
    const handleShow = (e) => {
        e.preventDefault();
        setShow(!show);
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content w-full flex-col lg:flex-row">
                <div className='md:w-1/2'>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Login now!</h1>    
                    </div>
                    <div className="card shadow-2xl bg-base-100  border-t-2">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control ">
                                <label className="label ">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                                {errors.name && <span className="text-red-500">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="join">
                                    <input {...register("password", { required: true })} type={show ? "text" : "password"} placeholder="password" className="input input-bordered grow text-slate-900" />
                                    <button onClick={handleShow} className='btn btn-square'>{show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</button>
                                </div>
                                {errors.name && <span className="text-red-500">Password is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-info"type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center font-semibold'> New In city Club? Please <Link to={`/register`} className='underline text-blue-500'>Register</Link> or login in with </p>
                        <button onClick={handleGoogleLogin} className="btn btn-outline btn-info mx-auto mt-5 mb-9"><FaGoogle className='text-2xl'></FaGoogle></button>
                    </div>
                </div>
                <img src={loginImage}/>
            </div>
        </div>
    );
};

export default Login;