import React from 'react'

const Cards = (props) => {
    return (

        <div className=' w-110 mb-8'>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ml-13 rounded-3xl">
          <img className="w-full h-48 object-cover" src={props.image} alt='title' />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.title}</div>
            <p className="text-gray-700 text-base">{props.description}</p>
          </div>
          <div className="px-6 py-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Learn More
            </button>
          </div>
        </div>
        </div>
      );

    }

export default Cards