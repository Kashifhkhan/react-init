import React from 'react';

class Home extends React.Component { 
  state = { count: 0 }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }


    render(){
      const time =  this.state.count;
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

export default Home;