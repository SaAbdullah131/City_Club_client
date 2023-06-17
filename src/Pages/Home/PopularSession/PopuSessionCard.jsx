import React from 'react';

const PopuSessionCard = ({ item }) => {
    const { sessionImage, sessionName, price,studentNumber } = item;
  

    return (
        <div>
            <div className="hero min-h-screen bg-green-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={sessionImage} className=" w-[384px] h-[261px]max-w-sm rounded-lg shadow-2xl" />
                    <div className='border-s-2 border-e-2 border-blue-400 px-4'>
                        <h1 className="text-2xl font-bold">{sessionName}</h1>
                        <p className="py-2">Stu.Number:{studentNumber}</p>
                        <p className='py-2'>Price: ${price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopuSessionCard;