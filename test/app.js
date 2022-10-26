const http = require('http');
const os = require('os');
const port = 8080;

console.log("Node server starting...")
console.log("Local hostname is " + os.hostname());
console.log("Listening on port " + port);

var handler = function(req, res) {
    let ip = req.connection.remoteAddress;
    console.log("Received req for " + req.url + " from " + ip);
    res.writeHead(200);
    res.write("Hey there, this is " + os.hostname() + ".");
    res.write("Your IP is " + ip + ".");
    res.end("\n");
};

var server = http.createServer(handler);
server.listen(port);