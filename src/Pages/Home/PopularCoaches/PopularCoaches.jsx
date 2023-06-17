import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import SingleCoach from './SingleCoach';

const PopularCoaches = () => {
    const [ coach, setCoach ] = useState([]);
   
    useEffect(() => {
        fetch(`https://summer-camp-school-server-inky.vercel.app/popular-coach`)
            .then(res => res.json())
            .then(data => {
                setCoach(data);
                
            })
    }, [])
//    console.log(coach);

    return (
        <div>
            <h3 className="mt-3 mb-2 text-3xl text-center font-bold underline">Popular Coaches Here..</h3>
            <div className='grid md:grid-cols-3 -cols-1 gap-6 py-4'>
                {
                    coach.map(c=><SingleCoach
                        key={c._id}
                        c={c}
                    >
                    </SingleCoach>)
                }
             </div>   
        </div>
    )
};

export default PopularCoaches;
