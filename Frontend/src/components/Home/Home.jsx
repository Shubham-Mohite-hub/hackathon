import React from 'react'


// import cimg from "../../assets/cimg.avif"

import Navbar from './Navbar.jsx'
import Page1 from './Page1.jsx'
import Page2 from './Page2.jsx'
import Footer from './Footer.jsx'
import AllEvents from './AllEvents.jsx'


const Home = () => {
  return (
    <div className='h-full'>
      <Navbar/>
      <Page1 />
      <Page2/>
      <AllEvents/>
      <Footer/>
    </div>

  )
}

export default Home
