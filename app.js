const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.send("<h1>it works!</h1>");
});

app.listen(8000, () => console.log("server up and running"));
