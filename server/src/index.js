// Imports
const path = require("path");
const express = require("express");

// Initialize express and mongoose
const app = express();
const port = process.env.PORT || 5010;

// Middleware Setup - Set up response headers
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
