import axios from "axios";

export async function registerEmployee(e, formObj) {
  e.preventDefault();
  // Destructure form fields
  const { firstName, lastName, email, password, department } = formObj;
  const newEmployee = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    department: department,
  };
  try {
    // Register user
    await axios.post(
      "https://course-manager-backend.herokuapp.com/api/employee/register",
      newEmployee
    );
  } catch (err) {
    console.log(err);
  }
}

export async function loginEmployee(e, formObj) {
  e.preventDefault();
  const { email, password } = formObj;
  try {
    // Attempt to log user in
    const loginResponse = await axios.post(
      "https://course-manager-backend.herokuapp.com/api/employee/login",
      {
        email: email,
        password: password,
      }
    );
    localStorage.setItem("auth-token", loginResponse.data.authToken);
    return {
      token: loginResponse.data.authToken,
      user: loginResponse.data.user,
    };
  } catch (err) {
    console.log(err.response.data.msg);
  }
}

export async function checkLoggedIn() {}
