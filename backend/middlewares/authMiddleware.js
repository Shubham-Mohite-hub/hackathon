import jwt from 'jsonwebtoken';
import User from '../models/user.js'; // Assuming User model exists

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Authorization token required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // Verify token
    const user = await User.findById(decoded.userId); // Fetch user from DB

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = user; // Attach user to request object
    next(); // Proceed to next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

export { authMiddleware };


export const isAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.jwt || req.header("Authorization")?.replace("Bearer ", ""); // Ensure consistency

    if (!token) {
      return res.status(403).json({ message: "No token, authorization denied" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }

    const admin = await Admin.findById(decoded.id); // Ensure admin exists
    if (!admin) {
      return res.status(403).json({ message: "You do not have permission to perform this action" });
    }

    req.admin = admin;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};