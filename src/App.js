import React, {Component, Fragment} from 'react';
import './App.css';
import PlugMe from './components/PlugMe'
import CompLifeCycle from './components/CompLifeCycle'
import BloggerAPI from './components/BloggerAPI'
import Chat from './components/Chat'
class App extends Component {
    constructor(){
        super()
        this.state = {
            chatList:['hello','hi','whats up']
        }
    }
    // person  = {
    //         name  : "",
    //         age : "",
    //         gender : ""
    //
    //     }


    onclickHandle=()=>{
         let selfe = this
        this.setState((privState)=>{
            selfe.state.chatList = privState.chatList.push('hello')
        })


    }
  render() {
    return (
        <div className="App">
            <CompLifeCycle/>
          <PlugMe  person={this.person}/>

            <BloggerAPI/>

            <ul> Add chat <button onClick={this.onclickHandle}>addChat</button>

                <Chat chatList={this.state.chatList}/>
            </ul>

        </div>
    );
  }
}

export default App;
