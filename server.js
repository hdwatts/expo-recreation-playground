const express = require("express");
const cors = require("cors");
const app = express();
const port = 8082;

app.use(cors());

app.get("/cookie", (req, res) => {
  res.setHeader("Set-Cookie", "a=1;");
  res.appendHeader("Set-Cookie", "b=2;");
  res.json({ hello: "world" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
