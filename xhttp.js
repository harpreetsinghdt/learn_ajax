console.log("Ajax running...");

// Performing GET request using XHR
// Create an XMLHttpRequest object
var xhttp = new XMLHttpRequest();

// Get xhr request

// handle response
xhttp.onreadystatechange = function(){
	if(this.readyState ==4 && this.status == 200){

		// console.log(Array.isArray(this.response));
		const full_data = JSON.parse(this.response);

		const foreach_data = full_data.forEach(x=>console.log("x= ",x));
		console.log("foreach_data= ",foreach_data);

		const map_data = full_data.map(x=>x);
		// console.log(Array.isArray(map_data));
		console.log("map_data= ",map_data);
		
		const filter_data = full_data.filter(x=>x.id>5000);
		console.log('filter_data= ',filter_data);

	}
};

// Specify the request method (GET or POST) and the URL to send the request to (true for async)

const endpoint = "https://random-data-api.com/api/v2/users?size=2&is_xml=true";
xhttp.open("GET", endpoint, true);

// send the request
xhttp.send();


// Performing Post request using XHR
// xhr.open("POST", '/submit', true);
// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// xhr.onreadystatechange = function() {
//     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
//         // Request finished. Do processing here.
//     }
// }
// xhr.send("name=Ketan&id=1");