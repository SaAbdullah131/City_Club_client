import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const AllCoaches = () => {
    const coach = useLoaderData();
    return (
        <div className='min-h-screen px-4 md:px-12 mt-10 mb-12'>
            <Helmet>
                <title>All Coaches</title>
            </Helmet>
            <div className='grid grid-cols-1 gap-6'>
                {
                    coach.map(item => <div
                        key={item._id}
                    >
                        <div className="card card-side  bg-green-200 shadow-xl h-96">
                            <figure className='w-1/2'><img className='w-full h-full' src={item.coachImage} alt="Movie" /></figure>
                            <div className="card-body ite justify-center ">
                                <h2 className="card-title  text-lg md:text-4xl font-bold">{item.coachName}</h2>
                                <h2 className="dark:text-slate-300 text-sm md:text-xl font-bold">{item.coachEmail}</h2>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllCoaches;