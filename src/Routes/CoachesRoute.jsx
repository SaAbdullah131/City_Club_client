import React, { Children, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import UseCoaches from '../Hooks/UseCoaches';
import { Navigate, useLocation } from 'react-router-dom';

const CoachesRoute = ({children}) => {
    const{user,loading} = useContext(AuthContext);
    const{isCoaches,isCoachesLoading} = UseCoaches();
    const location = useLocation();
    if(loading || isCoachesLoading) {
        return <div className='min=h=screen flex justify-center items-center'>
            <button className='btn'>
                <span className='loading loading-ring'></span>
                Please keep Eyes...
            </button>
        </div>
    }
    if(user && isCoaches) {
        return children;
    }
    return <Navigate to={'/'} state={{from:location}}replace></Navigate>
};

export default CoachesRoute;