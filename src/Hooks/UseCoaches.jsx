import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from 'react-query';

const UseCoaches = () => {
    const {user,loading} = useContext(AuthContext);
    const[axiosSecure] = UseAxiosSecure();

    // query 
    const {data:isCoaches,isLoading:isCoachesLoading} = useQuery({
        queryKey:['isCoaches',user?.email],
        enabled:!loading,
        queryFn: async()=> {
            const res = await axiosSecure.get(`users/coaches/${user?.email}`) ;
            return res.data.coaches;
        }
    })
    return [isCoaches,isCoachesLoading]
};

export default UseCoaches;