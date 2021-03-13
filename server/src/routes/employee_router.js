const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { queryHandler, hashPassword, verifyHash } = require("../util/util");

const employeeRouter = express.Router();

employeeRouter.post("/register", async (request, response, next) => {
  const { first_name, last_name, email, password, department } = req.body;

  const saltRounds = 10;
});
