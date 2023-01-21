const express = require("express");
const app = express();

app.set("view engine", "pug");

const mainRoutes = require("./routes");
const getDataRoutes = require("./routes/getData");

app.use(mainRoutes);
app.use("/getData", getDataRoutes);

app.listen(3000, () => {
  console.log("The application is running on localhost:3000!");
});
