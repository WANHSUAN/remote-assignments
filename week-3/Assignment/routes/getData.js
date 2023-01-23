const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let count;
  let { number } = req.query;
  if (!number) {
    count = "Lake of Parameter";
  } else if (isNaN(number)) {
    count = "Wrong Parameter";
  } else {
    count = caculate(number).toString();
  }

  function caculate(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      sum += i;
    }
    return sum;
  }

  const templateData = { count };
  res.cookie("number", count);
  res.render("getData", templateData);
});


router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static-html-sum.html"));
});


module.exports = router;
