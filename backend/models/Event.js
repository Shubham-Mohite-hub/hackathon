import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    eventType: { type: String, enum: ['Cultural', 'Technical'], required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    mode: { type: String, enum: ['Online', 'Offline'], required: true },
    pdf: { type: String },  // Path to uploaded PDF
    status: { type: String, enum: ['Pending', 'Approved', 'Denied'], default: 'Pending' },
  },
  { timestamps: true }
);

const Event = mongoose.model('Event', eventSchema);
export default Event;
