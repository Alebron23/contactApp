import React, { Component } from 'react';

import Header from './components/Header';
import acsImg from './imgs/acs-technologies.jpg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='app-container'>
          <div className='app'> 
            <Header />
            <div className='main'>
              <img alt='logo' className='app-logo' src={acsImg} />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
