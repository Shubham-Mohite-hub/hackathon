import Event from "../models/event.js";

// Create an event
export const createEvent = async (req, res) => {
  try {
    const { eventName, eventType, eventDateTime, duration, teamSize, registrationDeadline, description, guidelines, location, mode } = req.body;

    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized access" });
    }

    const newEvent = new Event({
      eventName,
      eventType,
      eventDateTime,
      duration,
      teamSize,
      registrationDeadline,
      description,
      guidelines,
      location,
      mode,
      image: req.file ? `/uploads/${req.file.filename}` : null, // Save file path
      createdBy: req.user.id, // User who created the event
    });

    await newEvent.save();
    res.status(201).json({ message: "Event created successfully", event: newEvent });
  } catch (error) {
    res.status(500).json({ message: "Error creating event", error: error.message });
  }
};

// Fetch all events
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate("createdBy", "name email");
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error: error.message });
  }
};
