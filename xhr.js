var xhr = require("xhr");

const endpoint = "https://random-data-api.com/api/v2/users?size=2&is_xml=true";

xhr({
    method: "get",
    uri: endpoint,
    headers: {
        "Content-Type": "application/json"
    }
	}, function (err, response, body) {
    // check resp.statusCode
		console.log('error:', error);
		console.log('statusCode:', response && response.statusCode); 
		console.log('body:', JSON.parse(body));
})
 
// xhr({
//     method: "post",
//     body: someJSONString,
//     uri: "/foo",
//     headers: {
//         "Content-Type": "application/json"
//     }
// }, function (err, resp, body) {
//     // check resp.statusCode
// })