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

courseRouter.post("/create", (request, response, next) => {
  Course.create(request.body, queryHandler(err, course, next, response));
});

module.exports = courseRouter;
