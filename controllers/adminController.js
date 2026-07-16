const User = require("../models/User");
const Course = require("../models/Course");

// Dashboard
exports.dashboard = async (req, res) => {
  try {
    const users = await User.countDocuments();
    const courses = await Course.countDocuments();

    res.json({
      success: true,
      users,
      courses,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get All Users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.json({
      success: true,
      users,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Analytics
exports.analytics = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalCourses = await Course.countDocuments();

    res.json({
      success: true,
      totalUsers,
      totalCourses,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};