const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB Connection Successful!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.listen(process.env.PORT || 8080, () => {
  console.log("Congo server is running");
});