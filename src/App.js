import React, { Component } from 'react';
import Routes from './Routes';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="app">
          <header className="app-header">
            <Navigation />
          </header>
          <div className="mecontainer">            
            <Routes />
          </div>
      </div>
    );
  }
}

export default App;
