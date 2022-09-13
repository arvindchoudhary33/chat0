const express = require("express");
const { chats } = require("../data/data");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/UserRoutes");
const { notFound, errorHandler } = require("./Middleware/errorMiddleware");
dotenv.config();

connectDB();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("heheh");
});

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
