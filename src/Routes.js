import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
