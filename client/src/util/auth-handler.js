const API_ENDPOINT = "http://localhost:5010/api/employee";

export async function registerEmployee(formObj) {
  // Destructure form fields
  const newEmployee = {
    firstName: formObj.firstName,
    lastName: formObj.lastName,
    email: formObj.email,
    password: formObj.password,
    department: formObj.department,
  };

  // Initialize request
  const requestParams = {
    method: "POST",
    body: JSON.stringify(newEmployee),
  };

  return fetch(`${API_ENDPOINT}/register`, requestParams).then((response) => {
    if (!response.ok) {
      // Error handling for when the user isn't authenticated
      if (response.status === 401) {
        return response.json();
      }
    } else {
      return response.json();
    }
  });
}

/**
 * Logs an Employee in
 * @param {*} formObj
 */
export async function loginEmployee(formObj) {
  // Destructure form fields
  const { email, password } = formObj;

  // Initialize request
  let requestParams = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };

  return await fetch(`${API_ENDPOINT}/login`, requestParams)
    .then((response) => {
      if (!response.ok) {
        // Error handling for when the user isn't authenticated
        if (response.status === 401 || response.status === 400) {
          const errorResponse = response.json();
          console.log(errorResponse);
          return errorResponse;
        }
      } else {
        const loginResponse = response.json();
        return loginResponse;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export function handleLogin(loginResponse) {
  // Store the JWT
  localStorage.setItem("auth-token", loginResponse.authToken);

  return {
    token: loginResponse.authToken,
    user: loginResponse.user,
  };
}

export async function checkLoggedIn() {}
