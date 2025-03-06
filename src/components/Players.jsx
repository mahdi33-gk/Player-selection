import React, { useEffect, useState } from "react";

const Players = () => {
    const [players, setPlayers] = useState([])
    useEffect(()=>{
        fetch('players.json')
        .then(res=> res.json())
        .then(data=> console.log(data))
    },[])
  return (
    <div>
        <div className="flex justify-between items-center">
      <div>
        <h1 className="font-bold text-[24px]">Available Players</h1>
      </div>
      <div className="border-2 rounded-lg px-5 py-2">
        <ul className="text-[16px]  flex gap-3">
          <li>Available</li>
          <li className="border-l-2 hover:bg-yellow-200 border-black pl-3 ml-1">
            Selected(<span>0</span>)
          </li>
        </ul>
      </div>
    </div>
    
    </div>
  );
};

export default Players;
