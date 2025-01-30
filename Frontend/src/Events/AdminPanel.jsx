import { useEffect, useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [pendingEvents, setPendingEvents] = useState([]);

  useEffect(() => {
    axios.get("/api/events/pending", { withCredentials: true })
      .then(res => setPendingEvents(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleStatusUpdate = async (eventId, status) => {
    await axios.put("/api/events/update-status", { eventId, status }, { withCredentials: true });
    setPendingEvents(pendingEvents.filter(event => event._id !== eventId));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold">Pending Event Approvals</h2>
      {pendingEvents.map(event => (
        <div key={event._id} className="p-4 border rounded my-2">
          <h3>{event.name}</h3>
          <button onClick={() => handleStatusUpdate(event._id, "Approved")} className="bg-green-500 text-white p-2 rounded">Approve</button>
          <button onClick={() => handleStatusUpdate(event._id, "Rejected")} className="bg-red-500 text-white p-2 rounded ml-2">Reject</button>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
