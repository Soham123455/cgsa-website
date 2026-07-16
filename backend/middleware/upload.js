const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Create uploads folder automatically
const uploadDir = path.join(__dirname, "../uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// ===========================
// Storage Configuration
// ===========================
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },

  filename: function (req, file, cb) {
    const uniqueName =
      Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(null, uniqueName + path.extname(file.originalname));
  },
});

// ===========================
// Allowed MIME Types
// ===========================
const allowedImageTypes = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const allowedPdfTypes = [
  "application/pdf",
];

// ===========================
// File Validation
// ===========================
const fileFilter = (req, file, cb) => {

  // Cover Image
  if (file.fieldname === "coverImage") {

    if (allowedImageTypes.includes(file.mimetype)) {
      return cb(null, true);
    }

    return cb(
      new Error(
        "Only JPG, JPEG, PNG and WEBP images are allowed."
      )
    );
  }

  // Gallery Images
  if (
    file.fieldname === "images" ||
    file.fieldname === "galleryImages"
  ) {

    if (allowedImageTypes.includes(file.mimetype)) {
      return cb(null, true);
    }

    return cb(
      new Error(
        "Only JPG, JPEG, PNG and WEBP images are allowed."
      )
    );
  }

  // PDF
  if (file.fieldname === "pdfFile") {

    if (allowedPdfTypes.includes(file.mimetype)) {
      return cb(null, true);
    }

    return cb(
      new Error("Only PDF files are allowed.")
    );
  }

  return cb(new Error("Unsupported upload field."));
};

// ===========================
// Multer Upload
// ===========================
const upload = multer({
  storage,
  fileFilter,

  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB
  },
});

module.exports = upload;