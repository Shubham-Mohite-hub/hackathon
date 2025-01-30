import React, { useState, useEffect } from "react";
import axios from "axios";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:3000/events/approved", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Approved Events</h2>
      <div className="event-cards">
        {events.map((event) => (
          <div key={event._id} className="event-card">
            <h3>{event.eventName}</h3>
            <p>{event.eventType}</p>
            <p>{event.eventDateTime}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>
            <a href={event.pdf} target="_blank" rel="noopener noreferrer">Download PDF</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
