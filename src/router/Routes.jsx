import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginContainer from "containers/LoginContainer";
import DashboardContainer from "containers/DashboardContainer";
import SignupContainer from "containers/SignupContainer";
import NavbarContainer from "containers/NavbarContainer";
import PostContainer from "containers/PostContainer";
function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginContainer />
        </Route>
        <Route path="/signup" exact>
          <SignupContainer />
        </Route>
        <Route path="/dashboard" exact>
          <NavbarContainer />
          <DashboardContainer />
        </Route>
        <Route path="/dashboard/post/:id" exact>
          <NavbarContainer />
          <PostContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
