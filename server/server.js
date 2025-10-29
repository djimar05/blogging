const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const db =  require("./config/db")
const userRoutes = require("./routes/User");
const postRoutes = require("./routes/Post");
const commentRoutes = require("./routes/Comment");
const likeRoutes = require("./routes/Like");

app.use(cors(
  {
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }
));
app.use(express.json());

app.use("/imageuploaded" , express.static("imageuploaded"))

app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/like", likeRoutes);

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
