import React from 'react';
import { FaBitcoin } from "react-icons/fa";

const Header = () => {
    return (
        <div className='flex justify-between pt-2'>
            <div>
                <img className='border-2 border-dashed' src="/images/logo.png" alt="" />
            </div>
            <div className='flex gap-5 items-center text-gray-600'>
                <p>Home</p>
                <p>Fixture</p>
                <p>Teams</p>
                <p>Schedules</p>
                <button className='btn border-2 p-2 rounded-xl inline-flex items-center gap-1 font-bold text-2xl'>
                    <span>0</span> Coin
                    <FaBitcoin></FaBitcoin>
                    
                </button>
            </div>
        </div>
    );
};

export default Header;