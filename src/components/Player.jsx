import React from 'react';
import { FaUser } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";

const Player = ({player}) => {
    const {name,price,image,country,category} = player;
    return (
        <div>
            <img src={image} alt="" />
            <h1 className='flex gap-2 py-2 items-center'><FaUser></FaUser>{name}</h1>
            <div className='flex justify-between items-center border-b-2'>
            <p className='flex gap-2 py-2 items-center'><CiFlag1></CiFlag1>{country}</p>
            <p>{category}</p>
            </div>
            <p>Price:${price}</p>
        </div>
    );
};

export default Player;