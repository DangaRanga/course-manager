// React imports
import React, { useState, useContext } from "react";
import Select from "react-select";
import { useHistory } from "react-router-dom";

// User module imports
import { UserContext } from "../../context/UserContext";
import { registerEmployee, loginEmployee } from "../../util/auth-handler";

// CSS and image imports
import book from "../../assets/icons/Book.svg";
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

  const submit = async (e) => {
    // Update the user context on submit
    let userData = {};
    if (formState.login) {
      userData = await loginEmployee(e, formState);
    } else {
      userData = await registerEmployee(e, formState);
    }
    setUserData(userData);
    history.push("/");
  };

  return (
    <div id="form-container">
      <img src={book} alt="book" id="form-img"></img>
      <h1>{formState.login ? "Login" : "Sign Up"} </h1>
      <form onSubmit={submit}>
        <input
          value={formState.email}
          required
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value,
            })
          } //
          type="email"
          placeholder="Email"
        />
        {!formState.login && (
          <div>
            <input
              value={formState.firstName}
              required
              onChange={(e) =>
                setFormState({
                  ...formState,
                  firstName: e.target.value,
                })
              }
              type="text"
              placeholder="First Name"
            />

            <input
              value={formState.lastName}
              required
              onChange={(e) =>
                setFormState({ ...formState, lastName: e.target.value })
              }
              type="text"
              placeholder="Last Name"
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
        <input
          value={formState.password}
          onChange={(e) =>
            setFormState({ ...formState, password: e.target.value })
          }
          type="password"
          placeholder="Password"
        />
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
      </form>
    </div>
  );
}

export default Form;
