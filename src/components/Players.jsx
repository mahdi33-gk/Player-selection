import React, { useEffect, useState } from "react";
import Player from "./Player";

const Players = ({players1,addPlayer}) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div className="pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-[24px]">Available Players</h1>
        </div>
        <div className="border-2 rounded-lg px-5 py-2">
          <ul className="text-[16px]  flex gap-3 join">
            <li className="join-item">Available</li>
            <li className="border-l-2 join-item hover:bg-yellow-200 border-black pl-3 ml-1">
              Selected({players1})
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 pb-10">
      {
        players.map(player=> <Player addPlayer={addPlayer} player={player}></Player>)
      }
      </div>
    </div>
  );
};

export default Players;
