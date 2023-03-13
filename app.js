const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const userRotutes = require("./roots/users.routes");
const PORT = 4000;
require("./db");

app.use(bodyParser.json());
app.use(cors());

app.use("/user", userRotutes);
app.get("/pinguser", (req, res, next) => {
  res.send({ status: true, message: "User Pong!!!" });
});

app.listen(PORT, () => {
  console.log(`server is running on the port ${PORT}`);
});
