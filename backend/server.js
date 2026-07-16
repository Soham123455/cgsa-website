require("dotenv").config();
const helmet = require("helmet");
const articleRoutes = require("./routes/articleRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const messageRoutes = require("./routes/messageRoutes");
const express = require("express");
const cors = require("cors");
const path = require("path");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");

const connectDB = require("./config/db");

const app = express();
app.disable("x-powered-by");
// Connect Database
connectDB();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://cgsa-website-blush.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

app.use("/api/articles", articleRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/messages",messageRoutes);
app.use(helmet());
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});
app.use("/api", apiLimiter);
// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "CGSA Backend Running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
