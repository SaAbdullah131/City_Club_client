import React from 'react';
import{Link} from 'react-router-dom';
import {FaGithubSquare} from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import signUpImg from '../../assets/city_club_signUp.gif';
import {useForm} from 'react-hook-form';

const Register = () => {
    const{register,handleSubmit,formState:{errors}}= useForm();

    const onSubmit = data =>{
        console.log(data);
    }
    // const handleSignIn=(e)=>{
    //     e.preventDefault();

    // }
    return (
        <>
            <div className="hero min-h-screen bg-green-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-green-100">
                        <h1 className="text-2xl text-center font-bold">Sign Up now!</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name",{required:true})} name='name' placeholder="Enter Your Name" className="input input-bordered"/>
                                {errors.name && <span className="text-red-500">Name Field is Required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"{...register("email",{required:true})} name='email' placeholder="Enter Your Email" className="input input-bordered"/>
                                {errors.email && <span className="text-red-500">Email Field is Required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"{...register("password",
                                {required:true,
                                    minLength:6,
                                    maxLength:16,
                                    pattern:/^(?=.*[A-Z])(?=.*[!@#$&*%])$/
                                    })} name='password' placeholder="Enter Your Password" className="input input-bordered" />
                                {errors.password?.type='required' && <span className="text-red-500">Password is Required</span>}
                                {
                                    errors.password?.type="minLength" && <span className="text-red-500">Password Must be 6 Character</span>
                                }
                                {
                                    errors.password?.type="maxLength" && <span className="text-red-500">Password can not be 16 Character</span>
                                }
                                {
                                    errors.password?.type="pattern" && <span className="text-red-500"></span>
                                }
                                
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn bg-green-400' type="submit" value="Sign Up" />
                            </div>
                            <p>Already Have an Account ? Please <Link to='/login' className='text-blue-500 font-semibold'>Login</Link></p>
                        </form>
                        <div className="divider">OR</div>
                        <div className='flex flex-row justify-center p-2 w-1/2'>
                            <button><FcGoogle className='mx-auto h-16 w-20'></FcGoogle></button>
                            <button><FaGithubSquare className='mx-auto h-16 w-20'></FaGithubSquare></button>
                        </div>
                    </div>
                    <div>
                        <img src={signUpImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )

}

export default Register;