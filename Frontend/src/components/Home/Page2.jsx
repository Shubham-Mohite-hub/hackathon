import React from 'react'
import Cards from './Cards.jsx'
import cimg from '../../assets/cimg.avif'
import ill2 from '../../assets/ill2.svg'

const Page2 = () => {
  return (
    <div >
      <div>
        <h2 className='ml-40 mt-25 mb-7 text-3xl pt-3'>Ongoing Events</h2>
        <div className='flex px-25'>
          <Cards title="title" description="decription" image={cimg}/>
          <Cards title="title" description="decription" image={cimg}/>
          <Cards title="title" description="decription" image={cimg}/>
        </div>
        <a href="" className='ml-40 text-xl'>More Events</a>
      </div>

      <div className='flex mb-10' >
        <p className='mt-20 ml-40 w-180 text-5xl'>Our website allows you to participate in hackathons and host your own, fostering innovation, collaboration, and competitive coding experiences for all.</p>
        <img src={ill2} className='h-100 mt-12' />
      </div>


      
      
    </div>
  )
}

export default Page2
