var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

var goodArray = ["You look great today dawg!", "Have you been hitting the gym?", "You're doing amazing.", "Keep it up!", "You Smart, You Loyal.", "All your sports teams will win today.", "You're a genius.", "Love ya dawg.", "You have a beautiful soul."];
var badArray = ["You look ugly dawg.", "You look even worse today", "When's the last time you showered?", "You suck", "None of these are good I don't know why you keep reloading, you must be a negative person.", "Do you even know what fashion is?", "You really need to clean up dawg.", "Your breath stinks."];

function goodRequest(request, response) {

	console.log(request.url, request.method);
	response.end(goodArray[Math.floor(Math.random() * goodArray.length)]);
}

function badRequest(request, response) {
	response.end(badArray[Math.floor(Math.random() * badArray.length)]);
}

var server1 = http.createServer(goodRequest);

var server2 = http.createServer(badRequest);

server1.listen(PORT1, function() {
	console.log("Server listening on: http://localhost:" + PORT1)
})

server2.listen(PORT2, function() {
	console.log("Server listening on: http://localhost:" + PORT2);
})