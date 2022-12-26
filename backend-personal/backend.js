const express = require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const cors = require("cors");
const Blog = require("./models/blog");
const Key = require("./models/keys");
const blogServices = require("./models/blog-services");
const keyServices = require("./models/keys-services");
const app = express();
const port = 3400;

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || port, () => {
    if (process.env.PORT) {
        console.log(`REST API is listening on port: ${process.env.PORT}.`);
    } else console.log(`REST API is listening on port: ${port}.`);
  });

// if an admin key is in the keys collection then authenticate login attempt
app.post("/login", async(req, res) => {
    const key = req.body["key"];
    //check for fields
    if(!key){
        return res.status(404).send("Need a key");
    }
    const keyItem = await keyServices.findKey(key);
    if(keyItem !== undefined && keyItem !== null){
        return res.status(202).send(keyItem[0]._id);
    }
    return res.status(404).send("Invalid key");
});

// allow admin to create a blog post
app.post("/blog", async(req, res) =>{
  try{
    const {title, descr, body} = req.body;
    //check for fields
    if(!(title && descr && body)){
      return res.status(400).send("All fields are required");
    }

    //create a post
    const post = await Blog.create({
      title: title,
      descr: descr,
      body: body,
    });
    if(post){
      return res.status(201).send("Post Created");
    }
    return res.status(400).send("Unable to create post");
  }
  catch(err){
    console.log(err);
  }
});

// get all the post from the database
app.get("/blog", async (req, res) => {
  try {
    const posts_from_db = await blogServices.getPosts();
    res.send({ post_list: posts_from_db });
  } catch (error) {
    res.status(500).send("An error ocurred in the server.");
  }
});