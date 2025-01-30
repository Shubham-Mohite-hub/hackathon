import express from 'express';
import { submitEvent, approveEvent, getPendingEvents } from '../controllers/eventController.js';
import { isAuthenticated, isAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

// User submits an event (this is public)
router.post('/submit', isAuthenticated, submitEvent);

// Admin approves or denies an event (this is protected)
router.put('/approve/:id', isAdmin, approveEvent);

// Admin gets all events for approval (this is protected)
router.get('/admin/events', isAdmin, getPendingEvents);

export default router;
