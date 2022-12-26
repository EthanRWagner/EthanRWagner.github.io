const mongoose = require("mongoose");

var today = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dd = today.getDate();
var mm = months[today.getMonth()]; //January is 0
var yyyy = today.getFullYear();

today = dd + ' ' + mm + ' ' + yyyy;
const BlogSchema = new mongoose.Schema({
  date: {
    type: String,
    trim: true,
    unique: false,
    required: true,
    default: today,
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
    required: false,
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