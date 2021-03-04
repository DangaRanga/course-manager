// Imports
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Declaring constants
const API_PORT = 9090 || process.env.API_PORT;

// Initializing express
const app = express();

// Declaring middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Okay we're working!");
});

app.listen(3000, () => {
  console.log("started server on port 3000");
});
