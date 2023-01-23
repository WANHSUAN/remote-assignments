const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/static", express.static("public"));
app.use("/", express.static(__dirname + "/public"));


const mainRoutes = require("./routes");
const getDataRoutes = require("./routes/getData");
const sumDataRoutes = require("./routes/sumData");
const helloDataRoutes = require("./routes/helloData");


app.use(mainRoutes);
app.use("/getData", getDataRoutes);
app.use("/sumData", sumDataRoutes);
app.use("/helloData", helloDataRoutes);


app.set("view engine", "pug");



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
