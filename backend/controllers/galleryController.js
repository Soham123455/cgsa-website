const Gallery = require("../models/Gallery");
const fs = require("fs");
const path = require("path");

// Upload Images
exports.uploadImages = async (req, res) => {
  try {
    const images = req.files;

    if (!images || images.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No images uploaded",
      });
    }

    const savedImages = [];

    for (const file of images) {
      const image = await Gallery.create({
        image: file.filename,
        title: file.originalname,
      });

      savedImages.push(image);
    }

    res.status(201).json({
      success: true,
      images: savedImages,
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Upload failed",
    });
  }
};

// Get All Images
exports.getImages = async (req, res) => {

  const images = await Gallery.find().sort({
    createdAt: -1,
  });

  res.json(images);

};

// Delete Image
exports.deleteImage = async (req, res) => {

  const image = await Gallery.findById(req.params.id);

  if (!image) {
    return res.status(404).json({
      message: "Image not found",
    });
  }

  const imagePath = path.join(
    __dirname,
    "..",
    "uploads",
    image.image
  );

  if (fs.existsSync(imagePath)) {
    fs.unlinkSync(imagePath);
  }

  await image.deleteOne();

  res.json({
    success: true,
  });

};