const axios = require('axios');

   export function   getStandings () {


       let data =   axios.get("https://sheetsu.com/apis/v1.0su/b0c13a2cd937", {})
            .then(function (response) {
               return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
       return data ; //function  called PROMICE

    };

    export function getStandingsByClubId (id) {


        return axios.get("https://sheetsu.com/apis/v1.0su/b0c13a2cd937" + "/id/" + id, {
            // params: {
            //     ID: 12345
            // }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    };

