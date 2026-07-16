const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

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
router.put("/:id/reject", rejectArticle);
router.delete("/:id", deleteArticle);

module.exports = router;
