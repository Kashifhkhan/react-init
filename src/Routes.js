import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import { Login } from "./components/login/login";
import Register from "./components/register/register";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
