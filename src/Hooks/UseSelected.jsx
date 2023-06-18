import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';

const useSelected = () => {
    const {user,loading} = useContext(AuthContext);
    const[axiosSecure] = useAxiosSecure();
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

export default useSelected;