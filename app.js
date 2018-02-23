var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
	var path = req.url;

	switch (path) {
		case "/":
		return readFile(res, path)

		case "/movies":
		return readFile(res, path)

		case "/framework":
		return readFile(res, path)

		case "/foods":
		return readFile(res, path)
	}
}

function readFile(res, page) {
	fs.readFile(__dirname + page, function(err, data) {
		res.writeHead(200, { "Content-Type": "text/html"});
		res.end(data);
	})
}

server.listen(PORT, function() {
	console.log("Server is listening.");
})