import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-amber-700 flex flex-col items-center p-6 text-white">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white">Contact Us</h1>
        <p className="text-black-700">Have questions or want to collaborate? Reach out to us!</p>
      </header>
      <section className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
        <form className="flex flex-col space-y-4">
          <input type="text" name="name" placeholder="Your Name" className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white" required />
          <input type="email" name="email" placeholder="Your Email" className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white" required />
          <input type="tel" name="phone" placeholder="Your Phone" className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white" />
          <textarea name="message" placeholder="Your Message" className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white" required></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">Send Message</button>
        </form>
      </section>
      <section className="w-full max-w-lg mt-8 text-center">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
          <h3 className="text-lg font-semibold text-white">Call Us</h3>
          <p className="text-gray-300">+91 98765 43210</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
          <h3 className="text-lg font-semibold text-white">Email Us</h3>
          <p className="text-gray-300">events@college.edu</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-white">Visit Us</h3>
          <p className="text-gray-300">College Campus, City, Country</p>
        </div>
      </section>
      <footer className="mt-8 text-gray-400">
        <p>&copy; 2025 College Event Management. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;