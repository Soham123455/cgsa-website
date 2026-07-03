const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const {
  createArticle,
  getArticles,
  approveArticle,
  rejectArticle,
  deleteArticle,
} = require("../controllers/articleController");

// Create Article
router.post(
  "/",
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "pdfFile", maxCount: 1 },
  ]),
  createArticle
);



router.get("/", getArticles);

// Approve Article
router.put("/:id/approve", approveArticle);

// Reject Article
router.put("/:id/reject", rejectArticle);

// Delete Article
router.delete("/:id", deleteArticle);

module.exports = router;
