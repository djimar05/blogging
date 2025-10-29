const multer = require("multer");
const path = require('path');
const {CloudinaryStorage} = require('multer-storage-cloudinary');

const cloudinary = require("../config/configCloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "assetsformybloggingapp",
    public_id: (req, file) => {
      file.filename + "-" + Date.now() + "-" + Math.round(Math.random() * 1e9);
    },
  },
});

const config = multer({
  storage : storage
});

/*
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./imageuploaded");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const x = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + x);
  },
});

const config = multer({
  storage: storage,
});
*/

module.exports = config;