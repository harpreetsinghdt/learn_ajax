// import axios from 'axios';
// const axios = require('axios')

// Performing GET Request in Axios
const endpoint = "https://random-data-api.com/api/v2/users?size=2&is_xml=true";

axios.get(endpoint, {
    params: {
      ID: 1
    }
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
		console.log("always executed");
  });

  // Performing POST Request in Axios
  // axios.post('/user', {
  //   name: 'Sanjeev',
  //   id: 1
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });