// Node Module imports
const express = require("express");

// User defined imports
const Employee = require("../models/employee.models");
const EmployeeController = require("../controllers/employee.controllers");
const { queryHandler } = require("../util/handlers.util");

const employeeRouter = express.Router();

employeeRouter.get("/", (request, response, next) => {
  EmployeeController.getEmployee(request, response);
});
employeeRouter.get("/all", (request, response, next) => {
  EmployeeController.getEmployees(request, response, next);
});

employeeRouter.post("/register", async (request, response, next) => {
  EmployeeController.registerEmployee(request, response);
});

employeeRouter.post("/login", (request, response, next) => {
  EmployeeController.loginEmployee(request, response);
});

employeeRouter.post("/checkToken", async (request, response, next) => {
  EmployeeController.checkTokenValidity(request, response);
});

module.exports = employeeRouter;
