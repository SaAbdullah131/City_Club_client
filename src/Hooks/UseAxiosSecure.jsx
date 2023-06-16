import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios  from 'axios';

const axiosSecure = axios.create({
    baseURL:''
})
const UseAxiosSecure = () => {
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate();


    useEffect(()=>{
        axiosSecure.interceptors.request.use((config)=>{
            const token = localStorage.getItem('access_token');
            if(access_token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response)=>response,
            async(error)=>{
                if(error.response && (error.response.status === 401 || error.response.status===403)){
                    await logOut();
                    navigate('/');
                }
                return Promise.reject(error);
            }
        );

    },[logOut,navigate]);

    return [axiosSecure];
};

export default UseAxiosSecure;