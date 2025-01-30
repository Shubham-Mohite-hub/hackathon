import express from "express";
import { submitEvent, getPendingEvents, updateEventStatus, getApprovedEvents } from "../controllers/eventController.js";
import { isAuthenticated, isAdmin } from "../middleware/authMiddleware.js";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // Configuring file upload

router.post("/submit", isAuthenticated, upload.single("pdf"), submitEvent);
router.get("/pending", isAdmin, getPendingEvents);
router.put("/update-status", isAdmin, updateEventStatus);
router.get("/approved", getApprovedEvents);

export default router;
