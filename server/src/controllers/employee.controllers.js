const Employee = require("../models/employee.models");

async function registrationController(request, response, errorHandler) {
  // Check if the fields are null or empty
  const isEmpty = !Object.values(request.body).some(
    (value) => value !== null && value !== ""
  );

  if (isEmpty) {
    return response
      .status(400)
      .json({ message: "Not all fields have been set" });
  }

  // Destructure request
  const { first_name, last_name, email, password, department } = req.body;

  // Check if the user already exists
  const userExists = await Employee.findOne({ email: email });

  if (userExists) const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);
}
