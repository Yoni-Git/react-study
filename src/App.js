import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlugMe from './components/PlugMe'

class App extends Component {
  render() {
    return (
        <div className="App">
          <PlugMe />
        </div>
    );
  }
}

export default App;
