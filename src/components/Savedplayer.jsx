import React from 'react';

const Savedplayer = ({player}) => {
    const {name,imgage} = player
    return (
        <div>
            <img src={imgage} alt="" />
            <h1>Name: {name}</h1>
        </div>
    );
};

export default Savedplayer;