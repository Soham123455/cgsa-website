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
router.put(
    "/:id/approve",
    authMiddleware,
    approveArticle
);

router.put(
    "/:id/reject",
    authMiddleware,
    rejectArticle
);

router.delete(
    "/:id",
    authMiddleware,
    deleteArticle
);

module.exports = router;
