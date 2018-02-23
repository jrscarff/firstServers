var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function goodRequest(request, response) {

	response.end("You look good today!");
}

function badRequest(request, response) {
	response.end("You look ugly dawg.");
}

var server1 = http.createServer(goodRequest);

var server2 = http.createServer(badRequest);

server1.listen(PORT1, function() {
	console.log("Server listening on: http://localhost:" + PORT1)
})

server2.listen(PORT2, function() {
	console.log("Server listening on: http://localhost:" + PORT2);
})