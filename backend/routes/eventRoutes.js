import express from "express";
import { createEvent, getEvents } from "../controllers/eventController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/uploadMiddleware.js";

const router = express.Router();

router.post("/create", authMiddleware, upload.single("image"), createEvent);
router.get("/all", getEvents);

export default router;
