var request = require('request');

const endpoint = "https://random-data-api.com/api/v2/users?size=2&is_xml=true";

request(endpoint, function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', JSON.parse(body));
});