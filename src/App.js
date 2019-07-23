import React, { Component } from 'react';
import Routes from './Routes';
import Navigation from './components/Navigation';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
            <Navigation />
          </header>
          <div className="meContainer">            
            <Routes />
          </div>
      </div>
    );
  }
}

export default App;
