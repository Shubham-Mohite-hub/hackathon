import Event from '../models/Event.js';

// User submits an event (this is public)
export const submitEvent = async (req, res) => {
  try {
    const { name, eventType, date, description, location, mode, pdf } = req.body;

    const newEvent = new Event({
      name,
      eventType,
      date,
      description,
      location,
      mode,
      pdf,
      status: 'Pending',  // initially set to 'Pending'
    });

    await newEvent.save();
    res.status(201).json({ message: 'Event submitted successfully for approval!' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting event', error: error.message });
  }
};

// Admin approves or denies an event (this is protected)
export const approveEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    const { action } = req.body;  // action can be 'approve' or 'deny'

    if (action === 'approve') {
      event.status = 'Approved';
    } else if (action === 'deny') {
      event.status = 'Denied';
    } else {
      return res.status(400).json({ message: 'Invalid action' });
    }

    await event.save();
    res.status(200).json({ message: `Event ${action}d successfully!` });
  } catch (error) {
    res.status(500).json({ message: 'Error processing event approval/denial', error: error.message });
  }
};

// Admin gets all events for approval (this is protected)
export const getPendingEvents = async (req, res) => {
  try {
    const events = await Event.find({ status: 'Pending' });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events', error: error.message });
  }
};
