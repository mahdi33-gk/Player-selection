import React from 'react';

const Savedplayer = ({player}) => {
    const {name,image} = player
    return (
        <div>
            <img src={image} alt="" />
            <h1>Name: {name}</h1>
        </div>
    );
};

export default Savedplayer;