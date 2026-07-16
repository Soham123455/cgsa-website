const Message = require("../models/Message");
const validator = require("validator");
exports.createMessage = async (req, res) => {
  try {

    let { name, email, message } = req.body;

    name = validator.escape(name?.trim() || "");
    email = email?.trim() || "";
    message = validator.escape(message?.trim() || "");

    // Required Fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required."
      });
    }

    // Email Validation
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address."
      });
    }

    // Length Checks
    if (name.length > 50) {
      return res.status(400).json({
        success: false,
        message: "Name is too long."
      });
    }

    if (message.length > 1000) {
      return res.status(400).json({
        success: false,
        message: "Message is too long."
      });
    }

    const savedMessage = await Message.create({
      name,
      email,
      message,
    });

    res.status(201).json(savedMessage);

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};

exports.getMessages = async (req, res) => {

    try {

        const messages = await Message.find().sort({createdAt:-1});

        res.json(messages);

    } catch(err){

        res.status(500).json({
            error:err.message,
        });

    }

};

exports.deleteMessage = async(req,res)=>{

    try{

        await Message.findByIdAndDelete(req.params.id);

        res.json({
            message:"Deleted"
        });

    }catch(err){

        res.status(500).json({
            error:err.message
        });

    }

};