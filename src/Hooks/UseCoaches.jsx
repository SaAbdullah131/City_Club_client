import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';

const useCoaches = () => {
    const {user,loading} = useContext(AuthContext);
    const[axiosSecure] = useAxiosSecure();

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

export default useCoaches;