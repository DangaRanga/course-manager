// Node Module imports
const express = require("express");

const Employee = require("../models/employee.models");
const {
  registerEmployee,
  loginEmployee,
} = require("../controllers/employee.controllers");

const { queryHandler } = require("../util/handlers.util");

const employeeRouter = express.Router();

employeeRouter.post("/register", async (request, response, next) => {
  registerEmployee(request, response);
});

employeeRouter.post("/login", (request, response, next) => {
  loginEmployee(request, response);
});

employeeRouter.post("/checkToken", async (request, response, next) => {
  checkTokenValidity(request, response);
});
