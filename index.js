const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load Environment Variables
dotenv.config();

const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");
const adminRoutes = require("./routes/adminRoutes");
const menuRoutes = require("./routes/menuRoutes");
const certificationRoutes = require("./routes/certificationRoutes");
// Connect Database
connectDB();

const app = express();

// ================= Middleware =================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ================= Home Route =================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    application: "AppWise API",
    version: "1.0.0",
    message: "Welcome to the AppWise Backend Server 🚀",
  });
});

// ================= Health Check =================
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "Server is running successfully",
  });
});

// ================= API Routes =================
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/certifications", certificationRoutes);
// ================= 404 Route =================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// ================= Global Error Handler =================
app.use((err, req, res, next) => {
  console.error(err.stack);

  const response = {
    success: false,
    message: err.message || "Internal Server Error",
  };

  if (process.env.NODE_ENV !== "production") {
    response.stack = err.stack;
  }

  res.status(500).json(response);
});

// ================= Server =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});