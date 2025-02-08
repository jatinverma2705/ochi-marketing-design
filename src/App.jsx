import React from 'react'
import NavBar from './Components/NavBar'
import Landing from './Components/Landing'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Cards from './Components/Cards'
import LocomotiveScroll from 'locomotive-scroll';
import Footer from './Components/Footer'


const App = () => {

const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className='w-full min-h-screen text-white bg-zinc-900 '>
      
      <NavBar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
