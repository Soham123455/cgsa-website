const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    department: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "Research Paper",
        "Essay",
        "Case Study",
        "Book Review",
        "Opinion",
      ],
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    abstract: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    coverImage: {
      type: String,
      default: "",
    },

    pdfFile: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Article", articleSchema);