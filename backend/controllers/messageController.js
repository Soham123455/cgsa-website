const Message = require("../models/Message");

exports.createMessage = async (req, res) => {
    try {

        const message = await Message.create(req.body);

        res.status(201).json(message);

    } catch (err) {

        res.status(500).json({
            error: err.message,
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