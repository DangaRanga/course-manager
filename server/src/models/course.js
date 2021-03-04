// Imports
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create course schema
const CourseSchema = new Schema({});

// Create course model
const Course = mongoose.model("course", CourseSchema);

module.exports = Course;
