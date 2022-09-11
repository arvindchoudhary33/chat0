const mongoose = require("mongoose");

// Name
// Email
// password
// picture of the user
const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    picture: {
      type: String,
      required: true,
      default: "https://cdn-icons-png.flaticon.com/128/1184/1184393.png",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userModel);

module.exports = User;
