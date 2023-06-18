import React, { useContext, useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import useCoaches from '../../../Hooks/useCoaches';
import useAdmin from '../../../Hooks/useAdmin';
import useSelected from '../../../Hooks/useSelected';
import { AuthContext } from '../../../Provider/AuthProvider';
import PopuSessionCard from './PopuSessionCard';

const PopularSession = () => {
    const [session, setSession] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [isCoach] = useCoaches();
    const [isAdmin] = useAdmin();
    const [, refetch] = useSelected();

    useEffect(() => {
        fetch(`https://summer-camp-school-server-inky.vercel.app/popular-session`)
            .then(res => res.json())
            .then(data => {
                setSession(data);  
            })
    }, []);
    const handleSelectedSession = session => {
        if (user && user.email) {
            const { sessionImage, sessionName, price, _id } = session;
            const selectSession = { selectedSessionId: _id, sessionImage: sessionImage, sessionName: sessionName, price: price, email: user?.email };
        }
    }


    return (
        <div className='p-4'>
            <h2 className='text-center text-3xl font-bold p-2 underline'>Popular Session Here</h2>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                {
                    session.map(item => 
                        <PopuSessionCard
                         key={item._id}
                         item={item}
                         >
                        </PopuSessionCard>
                    )
                }
            </div>
        </div>
    )
};

export default PopularSession;