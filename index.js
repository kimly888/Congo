const express = require("express");
const app = express();

app.use(express.json());

app.listen(process.env.PORT || 8080, () => {
  console.log("Congo server is running");
});
