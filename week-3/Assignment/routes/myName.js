const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { name } = req.query;
  if (name) {
    name = `Your Name: ${req.cookies.username}`;
  } else {
    res.render("myName");
  }
});

router.post("/", (req, res) => {
  res.cookie("username", req.body.username);
  console.dir(req.body);
  res.render("myName", { name: req.body.username });
});

module.exports = router;
