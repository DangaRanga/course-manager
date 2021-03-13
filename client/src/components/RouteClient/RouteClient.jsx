import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

// Import Views/Pages
import Auth from "../../views/Auth/Auth";
import Profile from "../../views/Profile/Profile";
import Catalogue from "../../views/Catalogue/Catalogue";
import Course from "../../views/Course/Course";

function RouteClient() {
  return (
    <Switch>
      <Route path="/auth" exact component={Auth}></Route>
      <ProtectedRoute path="/catalogue">
        <Redirect to="/courses"></Redirect>
      </ProtectedRoute>
      <ProtectedRoute path="/courses" exact component={Catalogue} />
      <ProtectedRoute path="/course/:cid" exact component={Course} />
      <ProtectedRoute path="/" exact component={Profile} />
    </Switch>
  );
}

export default RouteClient;
