import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import "./App.css";
import Beforefooter from "./components/Beforefooter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Players from "./components/Players";
import Plaayeradded from "./components/Plaayeradded";

function App() {
  const [money, setMoney] = useState(0);
  const moneyHandler = () => {
    const newMony = money + 4000000;
    setMoney(newMony);
    setBalance(newMony);
  };
  const [players1, setPlayers] = useState(0);

  const [selectplayer, setSelectplayer] = useState([]);
  const [balance, setBalance] = useState(money);
  const addPlayer = (player) => {
    if (balance < player.price) {
      return toast.error("not enough money");
    } else {
      const newSelection = [...selectplayer, player];
      const newBalance = balance - player.price;
      setBalance(newBalance);
      setMoney(newBalance);
      setSelectplayer(newSelection);

      const newPlayer = players1 + 1;
      setPlayers(newPlayer);
    }
  };

  return (
    <>
      <main className="w-10/12 mx-auto">
        <Header money={money}></Header>
        <Hero moneyHandler={moneyHandler}></Hero>
        <Players players1={players1} addPlayer={addPlayer}></Players>
        <Plaayeradded selectplayer={selectplayer}></Plaayeradded>
      </main>
      <Footer></Footer>
      <Beforefooter></Beforefooter>
      <div>
      <Toaster />
      <button onClick={() => toast('This is a toast.')}>Create a toast</button>
    </div>
    </>
  );
}

export default App;
