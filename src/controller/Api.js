import axios from 'axios'

 function getData() {

         // return axios.get('https://sheetsu.com/apis/v1.0su/b0c13a2cd937')

      return axios.get('https://reqres.in/api/users/?page=4')

}
export default getData;