import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Import Views/Pages
import Auth from "../../views/Auth/Auth";
import Profile from "../../views/Profile/Profile";
import Catalogue from "../../views/Catalogue/Catalogue";
import Course from "../../views/Course/Course";

function RouteClient() {
  return (
    <Switch>
      <Route path="/auth" exact component={Auth}></Route>
      <Route path="/catalogue">
        <Redirect to="/courses"></Redirect>
      </Route>
      <Route path="/courses" exact component={Catalogue}></Route>
      <Route path="/course/:cid" exact component={Course}></Route>
    </Switch>
  );
}

export default RouteClient;
