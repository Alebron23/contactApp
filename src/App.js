import React, { Component } from 'react';

import Header from './components/Header';
import acsImg from './imgs/acs-technologies.jpg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app-container'>
          <div className='app'> 
            <Header />
            <div className='main'>
              <div className='intro'>
                <div className='intro-header'> 
                  <h4>Welcome to the ACS Contact App</h4>
                </div>
                <img alt='logo' className='app-logo' src={acsImg} />
              </div>
            </div>

            <footer className='app-footer'>
              <div className='copyright'> Mustapha Yakeen &copy; 2018</div>
            </footer>
        </div>
      </div>
    );
  }
}

export default App;
