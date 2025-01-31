import React, { useState } from "react";
import axios from "axios";

const EventSubmit = () => {
  const [eventData, setEventData] = useState({
    eventName: "",
    eventType: "",
    eventDateTime: "",
    duration: "",
    teamSize: "",
    registrationDeadline: "",
    description: "",
    location: "",
    mode: "",
  });

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("jwt");

    try {
      const response = await axios.post(
        "http://localhost:3000/events/submit",
        eventData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token to request headers
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="eventName">Event Name</label>
        <input
          type="text"
          name="eventName"
          placeholder="Event Name"
          value={eventData.eventName}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="eventType">Event Type</label>
        <input
          type="text"
          name="eventType"
          placeholder="Event Type"
          value={eventData.eventType}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="eventDateTime">Event Date and Time</label>
        <input
          type="datetime-local"
          name="eventDateTime"
          value={eventData.eventDateTime}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="duration">Duration (hours)</label>
        <input
          type="number"
          name="duration"
          placeholder="Duration"
          value={eventData.duration}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="teamSize">Team Size</label>
        <input
          type="number"
          name="teamSize"
          placeholder="Team Size"
          value={eventData.teamSize}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="registrationDeadline">Registration Deadline</label>
        <input
          type="datetime-local"
          name="registrationDeadline"
          value={eventData.registrationDeadline}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          placeholder="Event Description"
          value={eventData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          placeholder="Event Location"
          value={eventData.location}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="mode">Mode</label>
        <input
          type="text"
          name="mode"
          placeholder="Online/Offline"
          value={eventData.mode}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit Event</button>
    </form>
  );
};

export default EventSubmit;
