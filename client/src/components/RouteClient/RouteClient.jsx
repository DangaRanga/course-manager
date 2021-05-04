// React imports
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Component Imports
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

// View/Page imports
import Auth from "../../views/Auth/Auth";
import Profile from "../../views/Profile/Profile";
import Catalogue from "../../views/Catalogue/Catalogue";
import Course from "../../views/Course/Course";

function RouteClient() {
  return (
    <AnimatePresence>
      <Switch>
        <Route path="/auth" exact component={Auth}></Route>
        <ProtectedRoute path="/catalogue">
          <Redirect to="/courses"></Redirect>
        </ProtectedRoute>
        <ProtectedRoute path="/courses" exact component={Catalogue} />
        <ProtectedRoute path="/course/:cid" exact component={Course} />
        <ProtectedRoute path="/profile">
          <Redirect to="/"></Redirect>
        </ProtectedRoute>
        <ProtectedRoute path="/" exact component={Profile} />
      </Switch>
    </AnimatePresence>
  );
}

export default RouteClient;
