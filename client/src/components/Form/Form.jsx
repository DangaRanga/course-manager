// React imports
import React, { useState, useContext } from "react";
import Select from "react-select";
import { useHistory } from "react-router-dom";

// User module imports
import { FormField } from "./FormField";
import { UserContext } from "../../context/UserContext";
import {
  registerEmployee,
  loginEmployee,
  handleLogin,
} from "../../util/auth-handler";

// CSS and image imports
import Logo from "../../assets/icons/Logo.svg";
import "./Form.css";

// Styling react select
function Form() {
  const options = [
    { label: "Web Development", value: "development" },
    { label: "Graphic Design", value: "design" },
    { label: "Video Production", value: "video" },
    { label: "Digital Advertising", value: "social media" },
  ];
  const { setUserData } = useContext(UserContext);
  const history = useHistory();
  const [formState, setFormState] = useState({
    login: true,
    firstName: "",
    lastName: "",
    department: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const submit = async (e) => {
    // Update the user context on submit
    e.preventDefault();
    let data = {};
    if (formState.login) {
      // Log user in and fetch details
      data = await loginEmployee(formState);

      // Display errors if there are any
      if (data.error) {
        setError(data.error);
      } else {
        // Remove errors if there are none
        setError("");
        const userData = handleLogin(data);

        // Redirect to home
        history.push("/");

        // Update Context
        setUserData(userData);
      }
    } else {
      await registerEmployee(formState);
      history.push("/");
    }
    console.log(data);

    //
  };

  return (
    <div id="form-container">
      <img src={Logo} alt="Logo" id="form-img"></img>
      <h1>{formState.login ? "Login" : "Sign Up"} </h1>
      <form onSubmit={submit}>
        <FormField
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value,
            })
          }
          type="email"
          name="Email Address"
        />
        {!formState.login && (
          <div>
            <FormField
              value={formState.firstName}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  firstName: e.target.value,
                })
              }
              type="text"
              name="First Name"
            />
            <FormField
              value={formState.lastName}
              onChange={(e) =>
                setFormState({ ...formState, lastName: e.target.value })
              }
              type="text"
              name="Last Name"
            />
            <Select
              className="custom-select"
              options={options}
              onChange={(e) => {
                setFormState({ ...formState, department: e.value });
              }}
              components={{
                IndicatorSeparator: () => null,
              }}
            ></Select>
          </div>
        )}
        <FormField
          value={formState.password}
          onChange={(e) =>
            setFormState({ ...formState, password: e.target.value })
          }
          type="password"
          name="Password"
        />
        {/* Toggle between Login and Signup */}
        <p id="auth-toggle">
          {formState.login ? "Don't have" : "Already have"} an account?{" "}
          <span
            id="form-toggle"
            onClick={(e) =>
              setFormState({
                ...formState,
                login: !formState.login,
              })
            }
          >
            Sign {!formState.login ? "in" : "up"}
          </span>
        </p>
        <button className="btn form-btn">
          {" "}
          {formState.login ? "Login" : "Sign Up"}
        </button>
        {error ? <div className="error"> {error}</div> : ""}
      </form>
    </div>
  );
}

export default Form;
