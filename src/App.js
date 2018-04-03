import React, { Component } from 'react';
import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>

        <div className="app-container">
          <div className="app"> 
            <Header index={5} />
            app
          </div>

        </div>
      </div>
    );
  }
}

export default App;
