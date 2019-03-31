import React, { Component } from 'react';
import './App.css';
import PlugMe from './components/PlugMe'
import Test from './components/matrialUi/Test'
class App extends Component {
    person  = {
            name  : "",
            age : "",
            gender : ""
        }
  render() {
    return (
        <div className="App">
          {/*<PlugMe  person={this.person}/>*/}
          <Test/>
        </div>
    );
  }
}

export default App;
