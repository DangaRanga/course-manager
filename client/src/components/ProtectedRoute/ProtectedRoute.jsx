// React imports
import React from "react";
import { Redirect, Route } from "react-router-dom";

// User module imports
import Nav from "../Nav/Nav";

function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        let token = localStorage.getItem("auth-token");
        console.log(token);
        if (token) {
          return (
            <div>
              <Nav></Nav>
              <Component {...props} />
            </div>
          );
        } else {
          return <Redirect to="/auth" />;
        }
      }}
    ></Route>
  );
}

export default ProtectedRoute;
