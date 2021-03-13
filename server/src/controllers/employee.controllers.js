const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { queryHandler, emptyRequestHandler } = require("../util/handlers.util");
const Employee = require("../models/employee.models");

const EmployeeController = {
  async registerEmployee(request, response) {
    // Check if the fields are null or empty
    const { firstName, lastName, email, password, department } = request.body;
    const fields = [firstName, lastName, email, password, department];
    console.log(fields);
    try {
      const isEmpty = emptyRequestHandler(request, fields);
      console.log(isEmpty);
      if (isEmpty) {
        return response
          .status(400)
          .json({ message: "Not all fields have been set" });
      }

      // Check if the user already exists
      const userExists = await Employee.findOne({ email: email });
      if (userExists) {
        return response.status(400).json({
          message: "An account with this email address already exists",
        });
      }

      // Create the password hash
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);

      const newEmployee = new Employee({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: passwordHash,
        department: department,
      });

      newEmployee.save((error) => {
        if (error) {
          return response.json({ error: "Something went wrong" });
        } else {
          return response.json({ success: "Employee sucessfully created " });
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
    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    // Check if the user exists
    const user = await Employee.findOne({ email: email });

    if (!user) {
      return response
        .status(400)
        .json({ message: "No user exists with the email entered" });
    }

    // Check the password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return response.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    response.json({
      auth_token: token,
      user: { id: user._id, email: user.email },
    });
  },

  async checkTokenValidity(request, response) {
    // Check for the token
    const token = request.header("x-access-token");
    if (!token) {
      return response.json({ message: "Token missing" });
    }

    // Check if the token is still valid
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    if (!verified) {
      return response.json({ message: "Token is no longer valid" });
    }

    // Check if the token belongs to the user
    const user = await User.findById(verified.id);

    if (!user) {
      return response.json({ message: "Invalid token for user" });
    }

    return response.json(true);
  },

  getEmployees(request, response, next) {
    Employee.find((err, employees) =>
      queryHandler(err, employees, next, response)
    );
  },

  deleteEmployee() {},
};

module.exports = EmployeeController;
