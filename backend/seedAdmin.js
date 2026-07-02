require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const connectDB = require("./config/db");
const Admin = require("./models/Admin");

const seedAdmin = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({
      email: "admin@cgsa.in",
    });

    if (existingAdmin) {
      console.log("⚠️ Admin already exists.");
      process.exit();
    }

    // Hash password
    const hashedPassword = await bcrypt.hash("admin123", 10);

    // Create Admin
    await Admin.create({
      name: "CGSA Admin",
      email: "admin@cgsa.in",
      password: hashedPassword,
    });

    console.log("✅ Admin created successfully!");
    console.log("--------------------------------");
    console.log("Email    : admin@cgsa.in");
    console.log("Password : admin123");
    console.log("--------------------------------");

    process.exit();

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();