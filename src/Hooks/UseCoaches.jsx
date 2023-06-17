import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from 'react-query';

const UseCoaches = () => {
    const {user,loading} = useContext(AuthContext);
    const[axiosSecure] = UseAxiosSecure();

    // query 
    const {data:isCoach,isLoading:isCoachLoading} = useQuery({
        queryKey:['isCoach',user?.email],
        enabled:!loading,
        queryFn: async()=> {
            const res = await axiosSecure.get(`users/coach/${user?.email}`) ;
            return res.data.coaches;
        }
    })
    return [isCoach,isCoachLoading]
};

export default UseCoaches;