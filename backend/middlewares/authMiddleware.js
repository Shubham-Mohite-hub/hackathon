import jwt from "jsonwebtoken";
import User from "../models/user.js";
import Admin from "../models/adminModel.js";
export const authMiddleware  = async (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) {
      return res.status(401).json({ message: "User not found" });
    }
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};


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