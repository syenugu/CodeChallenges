var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

handle = {};
handle["/"] = requestHandlers.homePage;
handle["/SuccessTestCase"] = requestHandlers.successTestCase;
handle["/FailureTestCase"] = requestHandlers.failureTestCase;
handle["/TestThis"] = requestHandlers.testThis;

server.start(router.route, handle);

