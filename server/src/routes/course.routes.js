// Imports
const express = require("express");
const Course = require("../models/course.models");
const { queryHandler } = require("../util/handlers.util");

// Initialize express router
const courseRouter = express.Router();

// Find all courses
courseRouter.get("/", (request, response, next) => {
  Course.find((err, courses) => queryHandler(err, courses, next, response));
});

// Find course by name
courseRouter.get("/course/:title", (request, response, next) => {
  Course.find(request.params.title, queryHandler(err, course, next, response));
});

// Create course
courseRouter.post("/create", (request, response, next) => {
  Course.create(request.body, queryHandler(err, course, next, response));
});

// Update Course
courseRouter.put("/:id", (request, response, next) => {
  Course.updateOne(
    request.params.id,
    { _id: request.params.id },
    { keySkills: request.body }
  );
});

// Delete Course
courseRouter.delete("/:id", (request, response, next) => {
  Course.findByIdAndRemove(
    request.body.id,
    queryHandler(err, course, next, response)
  );
});

module.exports = courseRouter;
