const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { queryHandler } = require("../util/util");
const Employee = require("../models/employee");

const employeeRouter = express.Router();

employeeRouter.post("/register", async (request, response, next) => {});

employeeRouter.post("/login", (request, response, next) => {
  // Extract credentials from request
  const email = request.body.email;
  const password = request.body.password;

  // Check if the user exists
});
