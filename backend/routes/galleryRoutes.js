const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const galleryController = require("../controllers/galleryController");

router.post(
  "/upload",
  upload.array("images", 20),
  galleryController.uploadImages
);

router.get("/", galleryController.getImages);

router.delete("/:id", galleryController.deleteImage);

module.exports = router;
