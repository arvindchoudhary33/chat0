const express = require("express");
const { chats } = require("../data/data");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

/* app.get("/", (req, res) => {
  res.send("dont know");
}); */

app.get("/", (req, res) => {
  res.send("heheh");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
  console.log(req);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
