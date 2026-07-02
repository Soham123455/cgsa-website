const Article = require("../models/Article");

// Create Article
exports.createArticle = async (req, res) => {
  try {

    const {
      fullName,
      email,
      department,
      category,
      title,
      abstract,
      content,
    } = req.body;

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

exports.approveArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(
      req.params.id,
      {
        status: "Approved",
      },
      { new: true }
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

exports.rejectArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(
      req.params.id,
      {
        status: "Rejected",
      },
      { new: true }
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

exports.deleteArticle = async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Article Deleted",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Get All Articles
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

// Approve Article
exports.approveArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(
      req.params.id,
      { status: "Approved" },
      { new: true }
    );

    res.json({
      success: true,
      article,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Reject Article
exports.rejectArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(
      req.params.id,
      { status: "Rejected" },
      { new: true }
    );

    res.json({
      success: true,
      article,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Delete Article
exports.deleteArticle = async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};