import React, { useState, useEffect, createContext } from "react";
import { Redirect, Route } from "react-router-dom";
import axios from "axios";

export const UserContext = createContext();

function EmployeeContext({ children }) {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");

      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      // Check if the token stored is valid
      let tokenResponse = {};
      try {
        tokenResponse = await axios.post(
          "http://localhost:5010/api/employee/checkToken",
          null,
          {
            headers: { "x-access-token": token },
          }
        );
      } catch (error) {
        localStorage.setItem("auth-token", "");
        token = "";
        return <Redirect to="/auth"></Redirect>;
      }

      // Retrieve user if the token is valid
      let userResponse = {};
      if (tokenResponse.data.isValidToken) {
        userResponse = await axios.get("http://localhost:5010/api/employee", {
          headers: { "x-access-token": token },
        });
      }

      setUserData({
        token: token,
        user: userResponse.data,
      });
    };

    checkLoggedIn();
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export default EmployeeContext;
