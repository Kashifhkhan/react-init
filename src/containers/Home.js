import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import actions from "actions";

class Home extends Component {
  componentWillMount() {
    const { actions } = this.props;
  }
  render() {
    return <div>This will be home component</div>;
  }
}

function mapStateToProps(state) {
  return { products: state.products };
}

function mapDispatchToProps(dispatch) {
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
