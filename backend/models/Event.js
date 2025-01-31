import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventType: { type: String, enum: ["cultural", "technical", "guidance", "sports"], required: true },
  eventDateTime: { type: Date, required: true },
  duration: { type: Number, required: true },
  teamSize: { type: Number, required: true },
  registrationDeadline: { type: Date, required: true },
  description: { type: String, required: true },
  guidelines: { type: String, required: true },
  location: { type: String, required: true },
  mode: { type: String, enum: ["online", "offline", "hybrid"], required: true },
  image: { type: String }, // URL of uploaded image
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
