var express = require("express");
const app = require("./index");
var router = express();
router.use(express.json());
const Blogs = require("./blogsModel");
const cors = require("cors");

router.options(
  "*",
  cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 })
);

router.use(
  cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 })
);

// View all Blogs
router.get("/", async (req, res, next) => {
  try {
    const blogs = await Blogs.find();
    res.send(blogs);
  } catch (err) {
    res.send("err");
  }
});

// View one particular Blogs
router.get("/:id", async (req, res, next) => {
  try {
    const blogs = await Blogs.findOne({ _id: req.params.id });
    res.send(blogs);
  } catch (err) {
    res.send("err");
  }
});

// Post Blogss
router.post("/", function (req, res, next) {
  const blogs = new Blogs(req.body);
  blogs
    .save()
    .then(() => {
      res.send("200");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
