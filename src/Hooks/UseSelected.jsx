import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from 'react-query';

const UseSelected = () => {
    const {user,loading} = useContext(AuthContext);
    const[axiosSecure] = UseAxiosSecure();
    const {refetch,data:select=[]} = useQuery({
        queryKey:['selects',user?.email],
        enabled:!loading,
        queryFn: async()=>{
            const res = await axiosSecure(`/selects?email=${user?.email}`)
            return res.data;
        }
    })
    return [select,refetch];
};

export default UseSelected;