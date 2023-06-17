import React from 'react';

const SingleCoach = ({ c }) => {
    const { coachName,  coachImage, coachEmail } = c;
    // console.log(c);
    return (
        <div className="hero h-[400px]" style={{backgroundImage:`url({${coachImage}} )` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{coachName}</h1>
                    <p className="mb-5">Email:{coachEmail}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleCoach;