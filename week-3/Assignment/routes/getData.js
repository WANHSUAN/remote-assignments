const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let number = req.query.number;
  let count;

  if (isNaN(number)) {
    count = "<h1>Wrong Parameter</h1>";
  } else {
    count = `<h1>${caculate(number).toString()}</h1>`;
  }

  function caculate(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      sum += i;
    }
    return sum;
  }

  res.send(count);
});

module.exports = router;
