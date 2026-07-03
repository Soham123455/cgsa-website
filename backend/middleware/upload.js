const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Create uploads folder automatically
const uploadDir = path.join(__dirname, "../uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },

  filename: function (req, file, cb) {
    const uniqueName =
      Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(
      null,
      uniqueName + path.extname(file.originalname)
    );
  },
});

// Allowed file types
const fileFilter = (req, file, cb) => {

  if (file.fieldname === "coverImage") {

    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files allowed."));
    }

  } else if (file.fieldname === "pdfFile") {

    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF allowed."));
    }

  }

};

const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;