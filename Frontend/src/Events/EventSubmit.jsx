import { useState } from "react";
import axios from "axios";

export default function EventSubmit() {
  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("cultural");
  const [eventDateTime, setEventDateTime] = useState("");
  const [duration, setDuration] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [registrationDeadline, setRegistrationDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [guidelines, setGuidelines] = useState("");
  const [location, setLocation] = useState("");
  const [mode, setMode] = useState("online");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("jwt"); // Retrieve token from localStorage
    console.log("Token in handleSubmit:", token); // Log the token for debugging

    if (!token) {
      setMessage("No token found. Please log in.");
      window.location.href = "/login"; // Redirect to login page
      return;
    }

    const formData = new FormData();
    formData.append("eventName", eventName);
    formData.append("eventType", eventType);
    formData.append("eventDateTime", eventDateTime);
    formData.append("duration", duration);
    formData.append("teamSize", teamSize);
    formData.append("registrationDeadline", registrationDeadline);
    formData.append("description", description);
    formData.append("guidelines", guidelines);
    formData.append("location", location);
    formData.append("mode", mode);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:3000/events/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in the Authorization header
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage("Event submitted successfully!");
      console.log(response.data);
    } catch (error) {
      if (error.response?.status === 401) {
        setMessage("Unauthorized. Please log in again.");
        localStorage.removeItem("token"); // Clear invalid token
        // window.location.href = "/login"; // Redirect to login
      } else {
        setMessage("Error submitting event");
        console.error(error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-lg bg-gray-900 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-100 mb-6">
          Fill Details of the Event
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Event Name */}
          <div>
            <label className="block font-semibold text-gray-300">Event Name</label>
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="Enter event name"
              className="w-full mt-1 p-2 border rounded-md border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Event Type Dropdown */}
          <div>
            <label className="block font-semibold text-gray-300">Event Type</label>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full mt-1 p-2 border rounded-md border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="cultural">Cultural</option>
              <option value="technical">Technical</option>
              <option value="guidance">Guidance</option>
              <option value="sports">Sports</option>
            </select>
          </div>

          {/* Event Time & Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-300">Event Time</label>
              <input
                type="datetime-local"
                value={eventDateTime}
                onChange={(e) => setEventDateTime(e.target.value)}
                className="w-full mt-1 p-2 border rounded-md border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-300">Duration (in hours)</label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="Enter duration"
                className="w-full mt-1 p-2 border rounded-md border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Team Size */}
          <div>
            <label className="block font-semibold text-gray-300">Team Size</label>
            <input
              type="number"
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
              placeholder="Enter team size"
              className="w-full mt-1 p-2 border rounded-md border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Registration Deadline */}
          <div>
            <label className="block font-semibold text-gray-300">Registration Deadline</label>
            <input
              type="date"
              value={registrationDeadline}
              onChange={(e) => setRegistrationDeadline(e.target.value)}
              className="w-full mt-1 p-2 border rounded-md border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold text-gray-300">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter event description"
              className="w-full mt-1 p-2 border rounded-md border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Guidelines */}
          <div>
            <label className="block font-semibold text-gray-300">Guidelines</label>
            <textarea
              value={guidelines}
              onChange={(e) => setGuidelines(e.target.value)}
              placeholder="Enter event guidelines"
              className="w-full mt-1 p-2 border rounded-md border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block font-semibold text-gray-300">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              className="w-full mt-1 p-2 border rounded-md border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Mode of Event (Online/Offline) */}
          <div>
            <label className="block font-semibold text-gray-300">Mode of Event</label>
            <div className="flex gap-4 mt-1">
              <label className="flex items-center text-gray-300">
                <input
                  type="radio"
                  name="mode"
                  value="offline"
                  checked={mode === "offline"}
                  onChange={(e) => setMode(e.target.value)}
                  className="mr-2"
                />{" "}
                Offline
              </label>
              <label className="flex items-center text-gray-300">
                <input
                  type="radio"
                  name="mode"
                  value="online"
                  checked={mode === "online"}
                  onChange={(e) => setMode(e.target.value)}
                  className="mr-2"
                />{" "}
                Online
              </label>
              <label className="flex items-center text-gray-300">
                <input
                  type="radio"
                  name="mode"
                  value="hybrid"
                  checked={mode === "hybrid"}
                  onChange={(e) => setMode(e.target.value)}
                  className="mr-2"
                />{" "}
                Hybrid
              </label>
            </div>
          </div>

          {/* Upload Image */}
          <div>
            <label className="block font-semibold text-gray-300">Upload Event Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-1 p-2 border rounded-md border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
            />
            {image && <p className="text-sm text-gray-400 mt-2">Selected: {image.name}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-2 mt-6 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Submit Event
          </button>

          {message && (
            <div
              className={`mt-4 text-center text-white ${message.includes("successfully") ? "bg-green-600" : "bg-red-600"} p-2 rounded-md`}
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}