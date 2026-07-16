require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");

const connectDB = require("./config/db");

const articleRoutes = require("./routes/articleRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const messageRoutes = require("./routes/messageRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// ==========================
// Connect Database
// ==========================
connectDB();

// ==========================
// Hide Express Fingerprint
// ==========================
app.disable("x-powered-by");

// ==========================
// Security Middleware
// ==========================
app.use(helmet());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://cgsa-website-blush.vercel.app",
    ],
    credentials: true,
  })
);

// ==========================
// Rate Limiter
// ==========================
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 Minutes
  max: 100,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

app.use("/api", apiLimiter);

// ==========================
// Parsing Middleware
// ==========================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==========================
// Logger
// ==========================
app.use(morgan("dev"));

// ==========================
// Static Uploads
// ==========================
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

// ==========================
// API Routes
// ==========================
app.use("/api/auth", authRoutes);
app.use("/api/articles", articleRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/messages", messageRoutes);

// ==========================
// Health Check
// ==========================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "CGSA Backend Running 🚀",
  });
});

// ==========================
// Start Server
// ==========================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});