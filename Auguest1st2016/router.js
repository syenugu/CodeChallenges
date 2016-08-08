function route(handle, pathName, response, request){
	console.log("About to route a request for "+ pathName);
	if(typeof handle[pathName] === 'function'){
		handle[pathName](response, request);
	}
	else{
		console.log("No request handler found for "+ pathName);
	}
}

exports.route = route;