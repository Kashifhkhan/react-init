import React, { Component } from 'react';
import Routes from './Routes';
import Navigation from './components/Navigation';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="meContainer">            
            <Navigation />
            <Routes />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
