const express = require("express");
const app = express();
const mongoose = require("mongoose");
const blogRouter = require("./blogRouter");

mongoose
  .connect("mongodb://localhost:27017/blogs")
  .then(() => {
    console.log("connection made");
  })
  .catch(() => {
    console.log("connection denied");
  });

app.use("/blogs", blogRouter);

app.listen(5000, () => {
  console.log("app is running on port 5000");
});
