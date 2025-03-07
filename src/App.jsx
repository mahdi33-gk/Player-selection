
import './App.css'
import Beforefooter from './components/Beforefooter'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Players from './components/Players'

function App() {

  return (
    <>
      <main className='w-10/12 mx-auto'>
      <Header></Header>
      <Hero></Hero>
      <Players></Players>
      
      
      </main>
      <Footer></Footer>
      <Beforefooter></Beforefooter>
    </>
  )
}

export default App
