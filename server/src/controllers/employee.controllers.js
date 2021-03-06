const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { queryHandler, emptyRequestHandler } = require("../util/handlers.util");
const Employee = require("../models/employee.models");

const EmployeeController = {
  async registerEmployee(request, response) {
    // Destructure the request
    const { firstName, lastName, email, password, department } = request.body;

    // Check if the request fields are empty
    const fields = [firstName, lastName, email, password, department];
    const isEmpty = emptyRequestHandler(request, fields);
    if (isEmpty) {
      return response
        .status(400)
        .json({ message: "Not all fields have been set" });
    }
    try {
      // Check if the user already exists
      const userExists = await Employee.findOne({ email: email });
      if (userExists) {
        return response.status(400).json({
          message: "An account with this email address already exists",
        });
      }

      // Create and save the employee to the database
      const newEmployee = new Employee({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        department: department,
      });

      newEmployee.save((err) => {
        if (err) {
          return response
            .status(400)
            .json({ err: `Error saving employee ${err.message}` });
        } else {
          return response
            .status(201)
            .json({ success: "Employee sucessfully created " });
        }
      });
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  },

  async loginEmployee(request, response) {
    // Extract credentials from request
    const { email, password } = request.body;

    // Check if the fields are empty
    const isEmpty = emptyRequestHandler(request, [email, password]);
    if (isEmpty) {
      return res.status(400).json({ msg: "Not all fields have been entered." });
    }

    // Check if the user exists
    try {
      const user = await Employee.findOne({ email: email });
      if (!user) {
        return response
          .status(400)
          .json({ message: "No user exists with the email entered" });
      }

      // Check the password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return response.status(401).json({
          message: "Invalid credentials",
        });
      }

      // Create the JWT
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: 900,
      });
      return response.status(200).json({
        authToken: token,
        user: {
          id: user._id,
          email: user.email,
          coursesInProgress: user.coursesInProgress,
          coursesCompleted: user.coursesCompleted,
        },
      });
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  },

  async checkTokenValidity(request, response) {
    try {
      // Check for the token
      const token = request.header("x-access-token");
      if (!token) {
        return response.json({
          message: "Token is missing",
          isValidToken: false,
        });
      }

      // Check if the token is still valid
      const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
      if (!verifiedUser) {
        return response.json({
          message: "Token is invalid",
          isValidToken: false,
        });
      }

      // Check if the token belongs to the user
      const employee = await Employee.findById(verifiedUser.id);

      if (!employee) {
        return response.json({ isValidToken: false });
      }

      return response.status(200).json({ isValidToken: true });
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  },

  async getEmployee(request, response) {
    const employee = await Employee.findById(request.user);
    response.json({
      email: employee.email,
      id: employee.id,
      coursesCompleted: employee.coursesCompleted,
      coursesInProgress: employee.coursesInProgress,
    });
  },

  getEmployees(request, response, next) {
    Employee.find((err, employees) =>
      queryHandler(err, employees, next, response)
    );
  },

  deleteEmployee() {},

  async updateEmployee(request, response) {
    console.log(request.body);
    await Employee.updateOne(
      { _id: request.params.id },
      {
        coursesInProgress: request.body.coursesInProgress,
      }
    );
  },
};

module.exports = EmployeeController;
