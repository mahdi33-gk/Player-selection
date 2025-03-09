import React from "react";
import { FaUser } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";

const Player = ({ player,addPlayer}) => {
  const { name, price, image, country, category, battingHand, bowlingHand } = player;
  return (
    <div className="border-2 border-gray-200 rounded-md px-3 py-1 mt-3">
      <img className="px-1 py-2 rounded-md" src={image} alt="" />
      <h1 className="flex gap-2 py-2 font-bold items-center">
        <FaUser></FaUser>
        {name}
      </h1>
      <div className="flex justify-between items-center border-b-2">
        <p className="flex gap-2 py-2 items-center">
          <CiFlag1></CiFlag1>
          {country}
        </p>
        <p>{category}</p>
      </div>
      <div className="flex justify-between items-center text-[12px]">
        <p className="flex gap-2 py-2 items-center">
          
          {bowlingHand}
        </p>
        <p>{battingHand}</p>
      </div>
      <div className="flex justify-between items-center pb-2">
      <p>Price:${price}</p>
      <button onClick={()=>addPlayer(player)} className="text-[13px] border-2 px-3 py-1 rounded-md">Choose Player</button>
      </div>
    </div>
  );
};

export default Player;
