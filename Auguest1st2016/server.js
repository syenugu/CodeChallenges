var http = require("http");
var url = require("url");
function start(route, handle){
	function onRequest(request, response){
		var pathName = url.parse(request.url).pathname;
		console.log("Request for "+ pathName +" received");
		response.writeHead(200, {"Content-Type": "text/plain"});
		route(handle, pathName, response, request);
		response.end();
	}
	http.createServer(onRequest).listen(8787);
	console.log("Server has started.");
}
exports.start = start;

