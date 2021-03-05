// Imports
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

// Declare constants
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5010;

// Initialize express and mongoose
const app = express();

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfuly connected to MongoDB"))
  .catch((error) => console.log("error"));

// Middleware Setup - Response headers
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Middleware Setup - Connecting to the react frontend
app.use(express.static(path.join(__dirname, "../../client/build")));

// Catch all route to serve the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Middleware Setup - Error handlers
app.use((request, response) => {
  response.status(404).json({ message: "Route Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
