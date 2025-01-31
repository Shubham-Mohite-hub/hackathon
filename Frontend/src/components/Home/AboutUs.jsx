import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-700 min-h-screen flex flex-col items-center px-6 py-12 text-gray-200">
      {/* Header Section */}
      <div className="max-w-6xl text-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-4">About Us</h2>
        <p className="text-xl leading-relaxed">
          We are a team dedicated to ensuring that college events run smoothly, efficiently, 
          and better than ever before. Our platform helps manage events, streamline operations, 
          and enhance the overall experience for both organizers and participants.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Text Box */}
        <div className="bg-gray-800 p-8 shadow-lg rounded-lg">
          <h3 className="text-3xl font-semibold text-white">
            Making College Events <span className="text-green-400">Better</span>
          </h3>
          <p className="mt-4">
            Our platform helps students and organizers create, manage, and optimize 
            college events. From planning to execution, we ensure everything runs seamlessly.
          </p>
          <p className="mt-3">
            Say goodbye to mismanagement and confusion—our system brings clarity, structure, 
            and ease to every event, making your college experience more engaging and stress-free.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/img4.jpg"
            alt="Teamwork"
            className="rounded-lg shadow-md object-cover w-full h-40"
          />
          <img
            src="/images/img2.jpg"
            alt="Event"
            className="rounded-lg shadow-md object-cover w-full h-40"
          />
          <img
            src="/images/img5.jpg"
            alt="Collaboration"
            className="rounded-lg shadow-md object-cover w-full h-40"
          />
          <img
            src="/images/image6.jpg"
            alt="University Event"
            className="rounded-lg shadow-md object-cover w-full h-40"
          />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl text-center mt-16">
        <h3 className="text-4xl font-bold text-white mb-6">Why Choose Us?</h3>
        <p className="text-lg mb-4">
          Our platform is designed to make event management seamless and stress-free. 
          Whether you're an organizer or a participant, here’s why you should choose us:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold text-green-400">Easy Event Creation</h4>
            <p className="mt-3">
              Create events with just a few clicks. Manage registrations, schedules, and updates easily.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
  <h4 className="text-2xl font-semibold text-green-400">Smooth Collaboration</h4>
  <p className="mt-3">
    Foster teamwork and collaboration with real-time messaging, updates, and group coordination.
  </p>
</div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold text-green-400">Real-Time Updates</h4>
            <p className="mt-3">
              Get instant updates on event schedules, announcements, and any last-minute changes.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-6xl text-center mt-16">
        <h3 className="text-4xl font-bold text-white mb-6">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold text-green-400">1. Plan</h4>
            <p className="mt-3">
              Define event details, schedules, and invite participants.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold text-green-400">2. Organize</h4>
            <p className="mt-3">
              Manage registrations, communicate with attendees, and set up logistics.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold text-green-400">3. Execute</h4>
            <p className="mt-3">
              Run the event smoothly with real-time updates and collaboration tools.
            </p>
          </div>
        </div>
      </div>

      {/* Expanded Footer Section */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-16 w-full">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p className="text-lg">&copy; 2025 College Event Management. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition text-lg">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;