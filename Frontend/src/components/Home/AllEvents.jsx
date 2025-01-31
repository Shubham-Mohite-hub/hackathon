import React, { useState } from 'react';

const eventsData = [
  {
    id: 1,
    name: 'Gaming Tournament',
    status: 'Ongoing',
    image: 'https://via.placeholder.com/150',
    prizePool: '$5,000',
    description: 'Join the gaming competition and win big!',
  },
  {
    id: 2,
    name: 'Hackathon 2025',
    status: 'Upcoming',
    image: 'https://via.placeholder.com/150',
    prizePool: '$10,000',
    description: 'A coding marathon for tech enthusiasts.',
  },
  {
    id: 3,
    name: 'Art Exhibition',
    status: 'Finished',
    image: 'https://via.placeholder.com/150',
    prizePool: 'N/A',
    description: 'Showcasing the finest pieces of art.',
  },
  // Add more event objects here
];

const AllEvents = () => {
  const [filter, setFilter] = useState('All');

  // Filter events based on the selected status
  const filteredEvents = eventsData.filter((event) => 
    filter === 'All' || event.status === filter
  );

  return (
    <div className="container mx-auto p-6">
      {/* Filter Section */}
      <div className="mb-6">
        <button
          onClick={() => setFilter('All')}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-4 hover:bg-blue-600"
        >
          All Events
        </button>
        <button
          onClick={() => setFilter('Ongoing')}
          className="bg-yellow-500 text-white px-4 py-2 rounded mr-4 hover:bg-yellow-600"
        >
          Ongoing
        </button>
        <button
          onClick={() => setFilter('Upcoming')}
          className="bg-green-500 text-white px-4 py-2 rounded mr-4 hover:bg-green-600"
        >
          Upcoming
        </button>
        <button
          onClick={() => setFilter('Finished')}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Finished
        </button>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={event.image} alt={event.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{event.name}</h3>
              <p className="text-sm text-gray-500">{event.status}</p>
              <p className="text-lg font-bold mt-2">{event.prizePool}</p>
              <p className="text-sm text-gray-700 mt-2">{event.description}</p>
              <a
                href="#"
                className="text-blue-500 mt-4 inline-block hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
