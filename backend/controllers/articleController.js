const Article = require("../models/Article");
const validator = require("validator");

// ==========================
// CREATE ARTICLE
// ==========================
exports.createArticle = async (req, res) => {
  try {
    let {
      fullName,
      email,
      department,
      category,
      title,
      abstract,
      content,
    } = req.body;

    // Sanitize Inputs
    fullName = validator.escape(fullName?.trim() || "");
    email = email?.trim() || "";
    department = validator.escape(department?.trim() || "");
    category = validator.escape(category?.trim() || "");
    title = validator.escape(title?.trim() || "");
    abstract = validator.escape(abstract?.trim() || "");
    content = validator.escape(content?.trim() || "");

    // Required Fields
    if (
      !fullName ||
      !email ||
      !department ||
      !category ||
      !title ||
      !abstract ||
      !content
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Email Validation
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address.",
      });
    }

    // Length Validation
    if (fullName.length > 50) {
      return res.status(400).json({
        success: false,
        message: "Name is too long.",
      });
    }

    if (title.length > 150) {
      return res.status(400).json({
        success: false,
        message: "Title is too long.",
      });
    }

    if (abstract.length > 500) {
      return res.status(400).json({
        success: false,
        message: "Abstract is too long.",
      });
    }

    if (content.length > 10000) {
      return res.status(400).json({
        success: false,
        message: "Content exceeds maximum length.",
      });
    }

    const article = await Article.create({
      fullName,
      email,
      department,
      category,
      title,
      abstract,
      content,

      coverImage: req.files?.coverImage
        ? req.files.coverImage[0].filename
        : "",

      pdfFile: req.files?.pdfFile
        ? req.files.pdfFile[0].filename
        : "",

      status: "Pending",
    });

    res.status(201).json({
      success: true,
      message: "Article submitted successfully.",
      article,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// GET ALL ARTICLES
// ==========================
exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: articles.length,
      articles,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================
// APPROVE ARTICLE
// ==========================
exports.approveArticle = async (req, res) => {
  try {

    const article = await Article.findByIdAndUpdate(
      req.params.id,
      {
        status: "Approved",
      },
      {
        new: true,
      }
    );

    res.json({
      success: true,
      message: "Article Approved",
      article,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================
// REJECT ARTICLE
// ==========================
exports.rejectArticle = async (req, res) => {
  try {

    const article = await Article.findByIdAndUpdate(
      req.params.id,
      {
        status: "Rejected",
      },
      {
        new: true,
      }
    );

    res.json({
      success: true,
      message: "Article Rejected",
      article,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================
// DELETE ARTICLE
// ==========================
exports.deleteArticle = async (req, res) => {
  try {

    await Article.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Article Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
