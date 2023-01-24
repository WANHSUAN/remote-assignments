const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("myName", { name: req.cookies.username });
});

router.post("/", (req, res) => {
  res.cookie("username", req.body.username);
  res.render("myName", { name: req.body.username });
});

module.exports = router;
