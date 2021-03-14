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

EmployeeSchema.pre("save", async function () {
  // Create the password hash
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(this.password, salt);
    console.log(passwordHash);
    this.password = passwordHash;
  }
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
