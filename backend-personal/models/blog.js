const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  date: {
    type: String,
    trim: true,
    unique: false,
    required: true,
  },
  title: {
    type: String,
    trim: true,
    unique: false,
    required: true,
  },
  descr: {
    type: String,
    trim: true,
    unique: false,
  },
  body: {
    type: String,
    trim: true,
    unique: false,
    required: true,
  }
}, {collection : 'blog_posts'});



const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;