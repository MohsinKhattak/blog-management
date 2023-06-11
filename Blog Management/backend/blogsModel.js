const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const blogs = new mongoose.model("blogs", blogsSchema);
module.exports = blogs;
