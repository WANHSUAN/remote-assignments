const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("myNumber");
});

router.post("/", (req, res) => {
  res.render("myNumber", { name: req.body.number });
});

module.exports = router;
