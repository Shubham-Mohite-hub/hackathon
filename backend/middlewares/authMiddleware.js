import jwt from 'jsonwebtoken';
import User from '../models/user.js';  // Make sure this path is correct
import Admin from '../models/adminModel.js';  // Same as above

// Authentication middleware to verify if the user is authenticated
export const isAuthenticated = async (req, res, next) => {
  const token = req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");
  
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);  // Get user data from decoded token
    if (!req.user) return res.status(404).json({ message: "User not found" });
    
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

// Admin authentication middleware to verify if the user is an admin
export const isAdmin = async (req, res, next) => {
  const token = req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");
  
  if (!token) {
    return res.status(403).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.id);  // Get admin data from decoded token

    if (!admin) return res.status(403).json({ message: "You do not have permission to perform this action" });

    req.admin = admin;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
};
