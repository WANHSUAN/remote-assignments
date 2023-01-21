const express = require("express");

const app = express();

app.use("/static", express.static("public"));
app.use("/", express.static(__dirname + "/public"));

app.set("view engine", "pug");

const mainRoutes = require("./routes");
const getDataRoutes = require("./routes/getData");
const sumDataRoutes = require("./routes/sumData");

app.use(mainRoutes);
app.use("/getData", getDataRoutes);
app.use("/sumData", sumDataRoutes);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render("error");
});

app.listen(3000, () => {
  console.log("The application is running on localhost:3000!");
});
