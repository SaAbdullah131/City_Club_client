import React, { useContext } from 'react';
import loginImg from '../../assets/city_club_login.gif';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Provider/AuthProvider';
import {Helmet} from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {
    const { signIn ,logInGoogle} = useContext(AuthContext);

    const handleGoogleLogin=(e)=> {
        e.preventDefault();
        logInGoogle()
        .then(result=> {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login Successful',
                showConfirmButton:false,
                timer: 1500
              })
        })
        .then(()=>{})
    }
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    title: 'User Login Successfully'
                  })
            })
            .then(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <Helmet>
                <title>City Club || Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-green-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card md:w-3/4 sm:w-full shadow-2xl bg-green-100">
                        <h1 className="text-2xl text-center font-bold">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body border-s-4 border-e-4 border-yellow">
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
                        <button onClick={handleGoogleLogin}><FcGoogle className='mx-auto h-16 w-20 p-2'></FcGoogle></button>

                    </div>
                    <div>
                        <img className='h-[500px] w-[650px] sm:invisible md:visible lg:visible' src={loginImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;