const express = require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const cors = require("cors");
const Blog = require("./models/blog");
const blogServices = require("./models/blog-services");
const app = express();
const port = 3400;

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || port, () => {
    if (process.env.PORT) {
      console.log(`REST API is listening on port: ${process.env.PORT}.`);
    } else console.log(`REST API is listening on port: ${port}.`);
  });