const express = require("express");
const app = express();
const port = 3000;

app.get("/myfirstApp", (req, res) => {
  var a = 1,
    b = 2;

  var c = a + b;
  res.send("Hello World! 123123 ");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
