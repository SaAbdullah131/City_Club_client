import React from 'react';

const PopuSessionCard = ({item}) => {
    const {sessionImage,sessionName,price} = item;
    console.log(item);

    return (
        <div>
            <h2>{sessionName}</h2>
        </div>
    );
};

export default PopuSessionCard;