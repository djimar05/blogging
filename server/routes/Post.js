const express = require('express');
const Post = express.Router();
const { createOne, retrieve, retrieveOne, updateOne, deleteOne } = require('../controller/Post');
const auth = require('../middleware/auth'); 
const configUpload = require('../middleware/upload');

Post.route('/')
  .get(retrieve)     
  .post(configUpload.single('image'),createOne); 

Post.route('/:id')
  .get(retrieveOne)   
  .put(auth, updateOne)   
  .delete(auth, deleteOne); 

module.exports = Post;
