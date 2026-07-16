const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const upload = require("../middleware/upload");
const galleryController = require("../controllers/galleryController");

router.post(
"/upload",
authMiddleware,
upload.array("images",20),
galleryController.uploadImages
);

router.get("/", galleryController.getImages);

router.delete(
"/:id",
authMiddleware,
galleryController.deleteImage
);

module.exports = router;
