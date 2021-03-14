// React imports
import React, { useState } from "react";

// CSS and image imports
import book from "../../assets/icons/Book.svg";
import "./Form.css";

function Form() {
  const [formState, setFormState] = useState({
    login: false,
    firstName: "",
    lastName: "",
    department: "",
    email: "",
    password: "",
  });
  return (
    <div id="form-container">
      <img src={book} alt="book" id="form-img"></img>
      <h1>{formState.login ? "Login" : "Sign Up"} </h1>
      <form>
        <input
          value={formState.email}
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
              onChange={(e) =>
                setFormState({ ...formState, lastName: e.target.value })
              }
              type="text"
              placeholder="Last Name"
            />

            <input
              value={formState.department}
              onChange={(e) =>
                setFormState({ ...formState, department: e.target.value })
              }
              type="text"
              placeholder="Department"
            />
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
          Don't have an account?{" "}
          <span
            id="form-toggle"
            onClick={(e) =>
              setFormState({
                ...formState,
                login: !formState.login,
              })
            }
          >
            Sign {formState.login ? "in" : "up"}
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
