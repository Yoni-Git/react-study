import React, { Component } from 'react';
import './App.css';
import PlugMe from './components/PlugMe'
import axios from 'axios'
import Table from './components/Table'

class App extends Component {

        state  = {
            user:[],
            header:[],
            page:0
        }

        onclickHandle =()=>{

               let self = this;
               let headers=[]
            axios.get('https://reqres.in/api/users/?page='+ self.state.page)
                .then(function (response) {
                    // handle success
                    console.log(response.data.data);
                    if(response.data.data.length > 0){

                        self.setState({user:response.data.data})
                            for(let key in self.state.user[0]) {
                                headers.push(key)
                            }
                            self.setState({header: headers})

                    }else {
                        headers.push("there is no data");
                        self.setState({header:headers})
                        self.setState({user:[]})
                    }
                    console.log(self.state.header);
                    console.log(self.state.user);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        }
    nextHandle=()=>{
            let pageNum=this.state.page + 1
            this.setState({page:pageNum})
          this.onclickHandle();
    }

  render() {
    return (
        <div className="App">
            <button onClick={this.onclickHandle}>loade data</button>
            <Table header={this.state.header} user={this.state.user}></Table>
            <button onClick={this.nextHandle}>Next</button>
            {/*<PlugMe  person={this.person}/>*/}
        </div>
    );
  }
}

export default App;
