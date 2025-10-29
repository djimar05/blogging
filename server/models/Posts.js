const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title:    { type: String, required: true },
  content:  { type: String},
  imageUrl: { type: String },
  author:   { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  likesCount: { type: Number, default: 0 },
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
