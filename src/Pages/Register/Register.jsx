import React, { useContext } from 'react';
import{Link} from 'react-router-dom';
import signUpImg from '../../assets/city_club_signUp.gif';
import {useForm} from 'react-hook-form';
import {AuthContext} from '../../Provider/AuthProvider';
import {Helmet} from 'react-helmet-async';
const Register = () => {
  const {createUser} = useContext(AuthContext);

    const{register,handleSubmit,reset,formState:{errors}}= useForm();

    const onSubmit = data =>{
        console.log(data);
        createUser(data.email,data.password)
        .then((result)=>{
            const newUser = result.user;
            console.log(newUser);
        })
        .then()
        reset();
    }
    // const handleSignIn=(e)=>{
    //     e.preventDefault();

    // }
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
                                <input type="text" {...register("name",{required:true})} name='name' placeholder="Enter Your Name" className="input input-bordered"/>
                                {errors.name?.type==='required' && <span className="text-red-500">Name  is Required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"{...register("email",{required:true})} name='email' placeholder="Enter Your Email" className="input input-bordered"/>
                                {errors.email && <span className="text-red-500">Email  is Required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"{...register("password",
                                {required:true,
                                    minLength:6,
                                    maxLength:16,
                                    pattern:/(?=.*[A-Z])(?=.*[!@#$&*%])/
                                    })} name='password' placeholder="Enter Your Password" className="input input-bordered" />
                                {
                                errors.password?.type==='required' && <span className="text-red-500">Password is Required</span>
                                }
                                {
                                    errors.password?.type==="minLength" && <span className="text-red-500">Password Must be 6 Character</span>
                                }
                                {
                                    errors.password?.type==="maxLength" && <span className="text-red-500">Password can not be 16 Character</span>
                                }
                                {
                                    errors.password?.type==="pattern" && <span className="text-red-500">Must Have One Uppercase and One Special Character</span>
                                }
                                 <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" {...register("confirmPassword",{required:true})} name='confirmPassword' placeholder="Enter confirm password" className="input input-bordered"/>
                                {errors.confirmPassword?.type==='required' && <span className="text-red-500">Confirm password is Required</span>}
                                
                            </div>
                                 <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photo",{required:true})} name='photo' placeholder="Enter Photo Url" className="input input-bordered"/>

                                {
                                errors.photo?.type==='required' && <span className="text-red-500">Photo URL is Required</span>
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