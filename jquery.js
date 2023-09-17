if(typeof process === 'object'){
    console.log(typeof process);
    const { JSDOM } = require( "jsdom" );
    const { window } = new JSDOM( "" );
    const $ = require( "jquery" )( window );
}

// Performing GET Request in Jquery
const endpoint = "https://random-data-api.com/api/v2/users?size=2&is_xml=true";

$.ajax({
    url: endpoint,
    type: "GET",
    dataType: "json",
    success: function (data) {
        console.log(data);
    },
    error: function (error) {
        console.log(`Error ${error}`);
    }
});

// Performing POST Request in Jquery
// $.ajax({
//     url: '/users',
//     type: "POST",
//     data: {
//         name: "Ipseeta",
//         id: 1
//     },
//     dataType: "json",
//     success: function (data) {
//         console.log(data);
//     },
//     error: function (error) {
//         console.log(`Error ${error}`);
//     }
// });