const Course = require("../models/course.models");
const { queryHandler } = require("../util/handlers.util");

const CourseController = {
  async getCourses(request, response, next) {
    await Course.find((err, courses) =>
      queryHandler(err, courses, next, response)
    );
  },

  async getCourse(request, response, next) {
    await Course.find(
      request.params.title,
      queryHandler(err, course, next, response)
    );
  },

  async createCourse(request, response, next) {
    await Course.create(request.body, (err, course) =>
      queryHandler(err, course, next, response)
    );
  },

  async updateCourse(request, response, next) {
    await Course.updateOne(
      request.params.id,
      { _id: request.params.id },
      { keySkills: request.body }
    );
  },

  async deleteCourse(request, response, next) {
    await Course.findByIdAndRemove(
      request.body.id,
      queryHandler(err, course, next, response)
    );
  },
};

module.exports = CourseController;
