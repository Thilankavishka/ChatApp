const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Server running on port", port);
});
