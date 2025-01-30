import Event from "../models/Event.js";

// Submit Event Request
export const submitEvent = async (req, res) => {
  try {
    const { name, type, dateTime, description, location, mode } = req.body;
    const pdf = req.file?.path; // Getting PDF file path
    const organizer = req.user.id; // Assuming user is authenticated

    const newEvent = new Event({
      name,
      type,
      dateTime,
      description,
      location,
      mode,
      pdf,
      organizer
    });

    await newEvent.save();
    res.status(201).json({ message: "Event request submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get Pending Events (For Admin)
export const getPendingEvents = async (req, res) => {
  try {
    const events = await Event.find({ status: "Pending" }).populate("organizer", "name email");
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Approve or Reject Event
export const updateEventStatus = async (req, res) => {
  try {
    const { eventId, status } = req.body;

    if (!["Approved", "Rejected"].includes(status)) {
      return res.status(400).json({ error: "Invalid status value" });
    }

    const event = await Event.findByIdAndUpdate(eventId, { status }, { new: true });

    if (!event) return res.status(404).json({ error: "Event not found" });

    res.status(200).json({ message: `Event ${status.toLowerCase()} successfully!` });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get Approved Events (For Display)
export const getApprovedEvents = async (req, res) => {
  try {
    const events = await Event.find({ status: "Approved" });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
