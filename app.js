var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
	var path = req.url;

	switch (path) {
		case "/":
		return rootPage(res)

		case "/movies":
		return moviesPage(res)

		case "/framework":
		return frameworkPage(res)

		case "/foods":
		return foodsPage(res)
	}
}

function rootPage(res) {
	fs.readFile(__dirname + "/root.html", function(err, data) {
		res.writeHead(200, { "Content-Type": "text/html"});
		res.end(data);
	})
}

function moviesPage(res) {
	fs.readFile(__dirname + "/movies.html", function(err, data) {
		res.writeHead(200, { "Content-Type": "text/html"});
		res.end(data);
	})
}

function frameworkPage(res) {
	fs.readFile(__dirname + "/framework.html", function(err, data) {
		res.writeHead(200, { "Content-Type": "text/html"});
		res.end(data);
	})
}

function foodsPage(res) {
	fs.readFile(__dirname + "/foods.html", function(err, data) {
		res.writeHead(200, { "Content-Type": "text/html"});
		res.end(data);
	})
}

server.listen(PORT, function() {
	console.log("Server is listening.");
})