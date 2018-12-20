import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions  from '../actions';

class Home extends React.Component { 
  
  increment = () => {
      this.props.inc(2)
      // this.props.dispatch(actions.inc());
      // this.props.dispatch({ type: 'INCREAMENT'});
  }

  decrement = () => {
      this.props.dec(2)
    // this.props.dispatch(actions.dec());
    // this.props.dispatch({ type: 'DECREAMENT'});
  }


    render(){
      const time =  this.props.count;
      return (
      <div>
        <h1>Home page</h1>
        <button type="button" onClick={this.increment}> Increase </button>
        <button type="button" onClick={this.decrement}> Decrease </button>
        <p>{ time }</p>
        
      </div>
      )
    }   
    
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);  
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);