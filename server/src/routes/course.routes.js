// Imports
const express = require("express");
const Course = require("../models/course.models");
const CourseController = require("../controllers/course.controllers");
const { queryHandler } = require("../util/handlers.util");

// Initialize express router
const courseRouter = express.Router();

// Find all courses
courseRouter.get("/", (request, response, next) => {
  CourseController.getCourses(request, response, next);
});

// Find course by name
courseRouter.get("/course/:title", (request, response, next) => {
  CourseController.getCourse(request, response, next);
});

// Create course
courseRouter.post("/create", (request, response, next) => {
  CourseController.createCourse(request, response, next);
});

// Update Course
courseRouter.put("/:id", (request, response, next) => {
  CourseController.updateCourse(request, response, next);
});

// Delete Course
courseRouter.delete("/:id", (request, response, next) => {
  CourseController.deleteCourse(request, response, next);
});

module.exports = courseRouter;
