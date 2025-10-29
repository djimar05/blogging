const mongoose = require("mongoose");
//"mongodb://mongo:27017/bloggingapp" (docker)
//mongodb://localhost:27017/bloggingapp

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
.then(() => console.log("db connected"))
.catch(err => console.log(err));

module.exports = mongoose;
