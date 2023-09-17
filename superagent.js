var superagent = require('superagent');

// Performing Get Request
const endpoint = "https://random-data-api.com/api/v2/users?size=2&is_xml=true";

superagent
   .get(endpoint)
   .query({ id: 1 })
   .then(res => {
			console.log(JSON.parse(res.text));
   });

// Performing Post Request

// superagent.post('/user')
//     .set('Content-Type', 'application/json')
//     .send('{"name":"Ipseeta","id":1}')
//     .then(callback)
//     .catch(errorCallback)