import React from 'react';

const OurServices = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Ongoing Events */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Ongoing Events</h3>
            <p className="text-gray-700 mb-4">
              Stay updated with the events happening right now at our college. Join them to be part of the excitement.
            </p>
            <button className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-500 transition duration-300">
              View Ongoing Events
            </button>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Upcoming Events</h3>
            <p className="text-gray-700 mb-4">
              Get a sneak peek into the events that are coming soon. Plan ahead and don't miss out on the fun.
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500 transition duration-300">
              View Upcoming Events
            </button>
          </div>

          {/* Event Registration */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-yellow-600 mb-4">Event Registration</h3>
            <p className="text-gray-700 mb-4">
              Register for your favorite events with ease. Secure your spot now and be part of the action.
            </p>
            <button className="bg-yellow-600 text-white py-2 px-4 rounded-full hover:bg-yellow-500 transition duration-300">
              Register Now
            </button>
          </div>

          {/* Host an Event */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Host an Event</h3>
            <p className="text-gray-700 mb-4">
              Want to host an event? We provide all the tools and support you need to make your event a success.
            </p>
            <button className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-500 transition duration-300">
              Host an Event
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
  <h4 className="text-2xl font-bold text-gray-900">Streamlined Interaction</h4>
  <p className="mt-3 text-gray-600">
    Foster smooth and efficient communication with real-time messaging, automated updates, and easy collaboration tools. 
    Here's how we make it work:
  </p>
  <p className="mt-3 text-gray-700">
    • Real-time chat for seamless communication<br />
    • Automated notifications to keep everyone in the loop<br />
    • Easy-to-use tools for quick collaboration and feedback<br />
    • Instant updates on event changes and progress
  </p>
  <div className="mt-4 text-center">
    <button className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-400 transition duration-150">
      Learn More
    </button>
  </div>
</div>




        </div>
      </div>
    </div>
  );
};

export default OurServices;