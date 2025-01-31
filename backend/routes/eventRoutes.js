import express from 'express';
import { createEvent } from '../controllers/eventController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/submit', authMiddleware, createEvent); // Protect route with authMiddleware

export default router;
