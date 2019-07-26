import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import customActions  from '../actions';

class Home extends React.Component { 




    render(){
      return (
      <div className="home-container">
          
      </div>
      )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(customActions, dispatch);  
}

function mapStateToProps(state) {
  return {
    count: state.countReducer.count
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);