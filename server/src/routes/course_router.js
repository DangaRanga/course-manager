// Imports
const express = require("express");
const Course = require("../models/course");
const { queryHandler } = require("../util/util");

// Initialize express router
const courseRouter = express.Router();

// Find all courses
courseRouter.get("/courses", (request, response, next) => {
  Course.find((err, courses) => queryHandler(err, courses, next, response));
});

// Find course by name
courseRouter.get("/courses/:title", (request, response, next) => {
  Course.find(request.params.title, queryHandler(err, course, next, response));
});

courseRouter.post("/courses", (request, response, next) => {
  Course.create(request.body, queryHandler(err, course, next, response));
});

module.exports = courseRouter;
