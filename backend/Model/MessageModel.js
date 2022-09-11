const mongoose = require("mongoose");

// Name of the sender ( or id)
//  Content of the message
//  reference to the chat it belongs to
const messageModel = mongoose.Schema(
  {
    send: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageModel);
module.exports = Message;
