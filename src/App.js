import React, { Component } from "react";
import Routes from "./Routes";
import Navigation from "./Navigation";

import "bootstrap/scss/bootstrap.scss";
import "./main.scss";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Routes />
      </div>
    );
  }
}

export default App;
