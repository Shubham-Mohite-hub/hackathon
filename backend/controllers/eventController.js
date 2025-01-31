import Event from '../models/eventModel.js';

const createEvent = async (req, res) => {
  try {
    const event = new Event({
      ...req.body,
      createdBy: req.user._id, // Store the user ID from the token
    });
    await event.save();
    res.status(201).json({ message: 'Event created successfully', event });
  } catch (error) {
    res.status(400).json({ message: 'Error creating event', error });
  }
};

export { createEvent };
