
import { useState } from 'react'
import './App.css'
import Beforefooter from './components/Beforefooter'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Players from './components/Players'

function App() {
  const [money, setMoney] = useState(0)
  const moneyHandler = ()=>{
    const newMony = money +4000000;
    setMoney(newMony)
  }

  return (
    <>
      <main className='w-10/12 mx-auto'>
      <Header money={money}></Header>
      <Hero moneyHandler={moneyHandler}></Hero>
      <Players></Players>
      
      
      </main>
      <Footer></Footer>
      <Beforefooter></Beforefooter>
    </>
  )
}

export default App
