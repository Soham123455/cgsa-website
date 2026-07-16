require("dotenv").config();

const articleRoutes = require("./routes/articleRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const messageRoutes = require("./routes/messageRoutes");
const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

app.use("/api/articles", articleRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/messages",messageRoutes);
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
