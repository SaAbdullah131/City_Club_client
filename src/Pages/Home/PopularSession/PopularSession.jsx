import React, { useContext, useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import UseCoaches from '../../../Hooks/UseCoaches';
import UseAdmin from '../../../Hooks/UseAdmin';
import UseSelected from '../../../Hooks/UseSelected';
import { AuthContext } from '../../../Provider/AuthProvider';
import PopuSessionCard from './PopuSessionCard';

const PopularSession = () => {
    const [session, setSession] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [isCoach] = UseCoaches();
    const [isAdmin] = UseAdmin();
    const [, refetch] = UseSelected();

    useEffect(() => {
        fetch(`https://summer-camp-school-server-inky.vercel.app/popular-session`)
            .then(res => res.json())
            .then(data => {
                setSession(data);  
            })
    }, []);
    // console.log(session);

    const handleSelectedSession = session => {
        if (user && user.email) {
            const { sessionImage, sessionName, price, _id } = session;
            const selectSession = { selectedSessionId: _id, sessionImage: sessionImage, sessionName: sessionName, price: price, email: user?.email };
        }
    }


    return (
        <div className='p-4'>
            <h2 className='text-center text-3xl font-bold'>Popular Session Here</h2>
            <div className='grid grid-cols-3'>
                {
                    session.map(item => {
                        <PopuSessionCard
                         key={item._id}
                         item={item}
                         >
                        </PopuSessionCard>
                    })
                }
            </div>
        </div>
    )
};

export default PopularSession;