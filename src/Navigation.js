import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/plp">Products</Link>
      </nav>
    );
  }
}

export default Navigation;
