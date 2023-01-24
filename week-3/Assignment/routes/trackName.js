const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
//   const { name } = req.query;
//   const text = req.cookies.username;
//   console.log(text);
  res.render("trackName");
});

router.post("/", (req, res) => {
  res.cookie("username", req.body.username);
  res.render("trackName");
});

module.exports = router;
