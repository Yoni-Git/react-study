import React, { Component } from 'react';
import './App.css';
import PlugMe from './components/PlugMe'

class App extends Component {
    person  = {
            name  : "",
            age : "",
            gender : ""
        }
  render() {
    return (
        <div className="App">
          <PlugMe  person={this.person}/>
        </div>
    );
  }
}

export default App;
