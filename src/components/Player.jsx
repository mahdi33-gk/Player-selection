import React from 'react';
import { FaUser } from "react-icons/fa";

const Player = ({player}) => {
    const {name,price,image,country} = player;
    return (
        <div>
            <img src={image} alt="" />
            <h1 className='flex gap-2 py-2'><FaUser></FaUser>{name}</h1>
            <p>{country}</p>
            <p>Price:{price}BDT</p>
        </div>
    );
};

export default Player;