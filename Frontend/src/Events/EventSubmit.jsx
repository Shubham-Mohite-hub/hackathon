import React, { useState } from "react";
import axios from "axios";

const EventSubmit = () => {
  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("Technical");
  const [eventDateTime, setEventDateTime] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [mode, setMode] = useState("Online");
  const [pdf, setPdf] = useState(null);
  const [message, setMessage] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("eventName", eventName);
    formData.append("eventType", eventType);
    formData.append("eventDateTime", eventDateTime);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("mode", mode);
    formData.append("pdf", pdf);

    const token = localStorage.getItem("token"); // Assuming JWT token is saved in localStorage

    try {
      const response = await axios.post(
        "http://localhost:3000/events/submit",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage("Event submitted successfully!");
      console.log(response.data);
    } catch (error) {
      setMessage("Error submitting event");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Submit Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Event Type:
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            required
          >
            <option value="Technical">Technical</option>
            <option value="Cultural">Cultural</option>
          </select>
        </label>
        <br />

        <label>
          Event Date and Time:
          <input
            type="datetime-local"
            value={eventDateTime}
            onChange={(e) => setEventDateTime(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Mode:
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            required
          >
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </label>
        <br />

        <label>
          Upload PDF:
          <input
            type="file"
            onChange={(e) => setPdf(e.target.files[0])}
            required
          />
        </label>
        <br />

        <button type="submit">Submit Event</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default EventSubmit;
