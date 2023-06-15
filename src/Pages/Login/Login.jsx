import React, { useContext } from 'react';
import loginImg from '../../assets/city_club_login.gif';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import {FaGithubSquare} from 'react-icons/fa';
import {AuthContext} from '../../Provider/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then((result)=>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .then(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-green-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-green-100">
                        <h1 className="text-2xl text-center font-bold">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn bg-green-400' type="submit" value="Login" />
                            </div>
                            <p>Are you New in City Club ? Please <Link to='/register' className='text-blue-500 font-semibold'>Register</Link></p>
                        </form>
                        <div className="divider">OR</div>
                        <div className='flex flex-row justify-center p-2 w-1/2'>
                            <button><FcGoogle className='mx-auto h-16 w-20'></FcGoogle></button>
                            <button><FaGithubSquare className='mx-auto h-16 w-20'></FaGithubSquare></button>
                        </div>
                    </div>
                    <div>
                        <img src={loginImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;