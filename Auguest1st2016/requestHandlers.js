var arraySum = require("./arraySum");
var url = require("url");

function homePage(response, request){
	console.log("request handler for homePage was called");
	response.write("Please choose among these three options:");
	response.write("\n");
	response.write('"http://localhost:8787/SuccessTestCase" for Success Unit Test');
	response.write("\n");
	response.write('"http://localhost:8787/FailureTestCase" for failure Unit Test');
	response.write("\n");
	response.write('"http://localhost:8787/TestThis?array=a,b,c,...,x" for you own Test');
	response.write("\n");

}
function successTestCase(response, request){
	response.write("Passing input: [11,20,8,31]");
	response.write("\n");
	response.write(arraySum.summarise([11,20,8,31]));
	response.write("\n");
	response.write("\n");
	homePage(response, request);
	console.log("request handler for successTestCase was called");
}
function failureTestCase(response, request){
	response.write("Passing input: [1,2,3]");
	response.write("\n");
	response.write(arraySum.summarise([1,2,3]));
	response.write("\n");
	response.write("\n");
	homePage(response, request);
	console.log("request handler for failureTestCase was called");
}

function testThis(response, request){
	var queryData = url.parse(request.url, true).query;
	var array = JSON.parse("[" + queryData.array + "]");
	response.write("[" + array + "]");
	response.write("\n");
	response.write(arraySum.summarise(array));
	response.write("\n");
	response.write("\n");
	homePage(response, request);
}

exports.homePage = homePage;
exports.successTestCase = successTestCase;
exports.failureTestCase = failureTestCase;
exports.testThis = testThis;