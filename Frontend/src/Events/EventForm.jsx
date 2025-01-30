import { useState } from "react";
import axios from "axios";

const EventForm = () => {
  const [eventData, setEventData] = useState({
    name: "",
    type: "Cultural",
    dateTime: "",
    description: "",
    location: "",
    mode: "Online",
    pdf: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleFileChange = (e) => {
    setEventData({ ...eventData, pdf: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    Object.keys(eventData).forEach((key) => {
      formData.append(key, eventData[key]);
    });

    try {
      await axios.post("/api/events/submit", formData, { withCredentials: true });
      alert("Event submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Error submitting event");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Submit Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Event Name" className="w-full p-2 border rounded" onChange={handleChange} required />
        <select name="type" className="w-full p-2 border rounded" onChange={handleChange}>
          <option value="Cultural">Cultural</option>
          <option value="Technical">Technical</option>
        </select>
        <input type="datetime-local" name="dateTime" className="w-full p-2 border rounded" onChange={handleChange} required />
        <textarea name="description" placeholder="Event Description" className="w-full p-2 border rounded" onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" className="w-full p-2 border rounded" onChange={handleChange} required />
        <select name="mode" className="w-full p-2 border rounded" onChange={handleChange}>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
        <input type="file" name="pdf" accept="application/pdf" className="w-full p-2 border rounded" onChange={handleFileChange} required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default EventForm;
