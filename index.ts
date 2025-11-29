// console.log("Hello via Bun!");
require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});
app.get("/twitter", (req: any, res: any) => {
  res.send("Hello Twitter!");
});
app.get("/login", (req: any, res: any) => {
  res.send("you cannot login");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
