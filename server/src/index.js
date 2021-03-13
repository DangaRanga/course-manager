// NPM Imports
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");

require("dotenv").config();

// Declare constants
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5010;

// Initialize express and mongoose
const app = express();
app.use(cors());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfuly connected to MongoDB"))
  .catch((error) => console.log("error"));

// Connect to the react frontend
app.use(express.static(path.join(__dirname, "../../client/build")));

// Catch all route to serve the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
