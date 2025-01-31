import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventType: { type: String, required: true },
  eventDateTime: { type: Date, required: true },
  duration: { type: Number, required: true },
  teamSize: { type: Number, required: true },
  registrationDeadline: { type: Date, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  mode: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

export default mongoose.model('Event', eventSchema);
