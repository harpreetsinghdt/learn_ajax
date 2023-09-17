// Performing GET Request in Fetch API

const endpoint = "https://random-data-api.com/api/v2/users?size=2&is_xml=true";

fetch(endpoint, {
	method: 'get'
})
.then(response => response.json())
.then(jsonData => 
	// response block
	console.log(jsonData)
)
.catch(err => {
		//error block
		console.error(err);
});

// Performing POST Request in Fetch API
// var url = 'https://www.yourdomain.com/updateProfile';
// var data = {username: 'courseya'};
// fetch(url, {
//   method: 'POST', // or 'PUT'
//   body: JSON.stringify(data), // data can be `string` or {object}!
//   headers:{
//     'Content-Type': 'application/json'
//   }
// }).then(res => res.json())
// .then(response => console.log('Success:', JSON.stringify(response)))
// .catch(error => console.error('Error:', error));