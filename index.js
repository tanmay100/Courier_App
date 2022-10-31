const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());

// Admin route
const adminRouter = require("./routes/admin");
app.use("/api/admin", adminRouter);

// Client Route
const clientRouter = require("./routes/client");
app.use("/api/client", clientRouter);

mongoose
  .connect(process.env.DB_CONNECTION_URL)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log("listening at port 8080");
});
