import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "containers/Home";
import Plp from "containers/Plp";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/plp" component={Plp} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
