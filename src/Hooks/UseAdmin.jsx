import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from 'react-query';

const UseAdmin = () => {
    const{user,loading} = useContext(AuthContext);
    const [axiosSecure] = UseAxiosSecure();

    // query
    const {data:isAdmin,isLoading:isAdminLoading} = useQuery({
        queryKey:['isAdmin',user?.email],
        enabled:!loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })

    return [isAdmin,isAdminLoading];
    
};

export default UseAdmin;