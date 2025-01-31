import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import adminRoutes from "./routes/adminRoutes.js"
import eventRoutes from "./routes/eventRoutes.js"
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();
dotenv.config();
//middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // Allow frontend URL
    credentials: true, // Allow cookies and authentication headers
  })
);
app.use("/uploads", express.static("uploads"));
// ++++++++++++++++
const PORT=3000;
const db =PORT || 3001;
const URI = process.env.MONGODB_URI;

try {
  mongoose.connect(URI);
  console.log("connected to mongodb");
} catch (error) {
  console.log("Error:", error);
}
// app.use("api/auth",authRoutes)
app.use("/user", userRoute);
app.use("/admin", adminRoutes);
app.use('/events', eventRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});