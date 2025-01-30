import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ["Cultural", "Technical"], required: true },
  dateTime: { type: Date, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  mode: { type: String, enum: ["Online", "Offline"], required: true },
  pdf: { type: String, required: true }, // Store PDF URL
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  status: { type: String, enum: ["pending", "approved", "denied"], default: "pending" },
}, { timestamps: true });

const Event = mongoose.model("Event", eventSchema);
export default Event;
