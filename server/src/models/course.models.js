// Imports
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create course schema
const CourseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  externalUrl: {
    type: String,
    required: true,
  },

  duration: {
    hours: Number,
    minutes: Number,
  },

  comments: [{ body: String, date: Date, rating: Number }],

  dateCreated: {
    type: Date,
    default: Date.now,
    required: true,
  },

  keySkills: [String],

  finished: {
    type: Boolean,
    default: false,
    required: true,
  },
});

// Create course model
const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;
