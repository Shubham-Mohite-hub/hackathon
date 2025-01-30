import React from 'react'
// import Navbar from './Navbar'
import Tagline from './Tagline'
import cimg from "../../assets/cimg.avif"
import Navbar from './Navbar'
import Landingpg from './Landingpg'
import Cards from './Card'
// import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Landingpg/>
      <h2 className='ml-55 text-4xl mb-5'>Events</h2>
      <div className='flex justify-center items-center'>
      
      <Cards heading="EVENTS" image={cimg} title="title" description="description"/>
      <Cards heading="EVENTS" image={cimg} title="title" description="description"/>
      <Cards heading="EVENTS" image={cimg} title="title" description="description"/>
      </div>
      <Landingpg/>
      <h2 className='ml-55 text-4xl mb-5'>Events</h2>
      <div className='flex justify-center items-center'>
      
      <Cards heading="EVENTS" image={cimg} title="title" description="description"/>
      <Cards heading="EVENTS" image={cimg} title="title" description="description"/>
      <Cards heading="EVENTS" image={cimg} title="title" description="description"/>
      </div>
      <Landingpg/>
      <h2 className='ml-55 text-4xl mb-5'>Events</h2>
      <div className='flex justify-center items-center'>
      
      <Cards heading="EVENTS" image={cimg} title="title" description="description"/>
      <Cards heading="EVENTS" image={cimg} title="title" description="description"/>
      <Cards heading="EVENTS" image={cimg} title="title" description="description"/>
      </div>
      {/* <Footer/> */}
    </div>


  )
}

export default Home
