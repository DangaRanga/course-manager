// Imports
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;
const jwtSecret = process.env.SECRET_KEY;

const EmployeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    requited: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  roles: {
    type: {
      type: String,
      enum: ["employee", "admin"],
    },
    default: "employee",
  },

  department: {
    type: String,
    enum: ["design", "development", "photography", "video", "social media"],
    required: true,
  },

  coursesCompleted: {
    type: [String],
    default: [],
  },

  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

EmployeeSchema.pre("save", async function (next) {
  const employee = this;
  const hash = await bcrypt.hash(this.password, 12);

  this.password = hash;
  next();
});

EmployeeSchema.methods.validatePassword = async function (password) {
  const isValidPassword = await bcrypt.compare(password, this.passwod);
};
const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
