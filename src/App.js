import React, { Component } from 'react';
import timer from './timer.js';
import logo from './logo.png';
import github from './github.png';

class App extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div className="App">         
        
          
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />            
        
        </div>   
      </div>
    );
  }
}

export default App;
