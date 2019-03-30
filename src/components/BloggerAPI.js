import  React ,{Component} from 'react';
import Api from '../controller/Api'
import axios from "axios";

class BloggerAPI extends Component {
    constructor(){
        super()
         this.state = {
               data:[],

             user:{
                first_name:"Byron",
                last_name:"Fields"
             },
             update:{
                 first_name:"yoyo",
                 last_name:"yayaaaaa"
             }
        }


    }
    putData = () =>{
        axios.put('https://reqres.in/api/users/2',this.state.update).
             then(response =>{
                 console.log(response)
                }).then(err =>{
                   console.log(err)
            })
    }
    deleteData=()=>{
        axios.delete('https://reqres.in/api/users',this.state.user)
            .then(response =>{
                console.log(response)
            }).then(err =>{
                console.log(err)
        })
    }
    postData =()=>{
        axios.post('https://reqres.in/api/users',this.state.user)
             .then(function (response) {
            console.log(response)
                    }).catch(err => {
            console.log(err)
                 })
    }
    getDataFromApi =()=>{
        let self=this
        axios.get('https://reqres.in/api/users/?page=4')
            .then(function (response) {
                // handle success
                console.log(response);
                self.setState({data:response.data.data})

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    componentWillMount(){

    }

    render(){
        return(
            <div>
                <button onClick={this.getDataFromApi}>Get Blogger </button>
                <button onClick={this.postData}>Post Blogger </button>
                <button onClick={this.deleteData}>delete Blogger </button>
                <button onClick={this.putData}>put Blogger </button>


                {this.state.data.map((item,i) =>  {
                   return(<div key={i}>{item.first_name}</div>)
                   })}
            </div>
        )
    }
}
export default BloggerAPI;