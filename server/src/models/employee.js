// Imports
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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

  salt: {
    type: String,
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

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
