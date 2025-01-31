import React from 'react'
import imgpg1 from '../../assets/imgpg1.jpg'

const Page1 = () => {
  return (
    <div className='h-100vh'> 
        <div className='flex'>

            <div className=' w-[60%] h-100 ml-30 flex justify-between mt-10 rounded-3xl'>
                <p className='text-7xl px-10 mt-10 leading-tight'>From <span className='bg-yellow-200 rounded-3xl text-6xl px-2'>DREAMS</span> to Reality: A Journey of <span className='bg-yellow-200 rounded-3xl text-6xl px-2'>CREATIVITY,</span> 
                <span className='bg-yellow-200 rounded-3xl text-6xl px-2'>COMPETITION,</span> and <span className='bg-yellow-200 rounded-3xl text-6xl px-2'>CELEBRATION</span></p>
            </div>

            <div className='mt-20 ml-10 mr-20 bg-red-100'>
                <img src={imgpg1} className='h-100 '/>
            </div>
        </div>

        <div >
        <button className="rounded-xl bg-blue-600 ml-40 w-60 h-12 text-xl text-white border-2 border-blue-600 transition duration-300 hover:bg-white hover:text-blue-600">HOST A EVENT</button>
        <button className="rounded-xl bg-white border-2 border-blue-600 ml-7 w-60 h-12 text-xl text-blue-600 transition duration-300 hover:bg-blue-600 hover:text-white">PARTICIPATE</button>
        </div>
    </div>
  )
}

export default Page1
