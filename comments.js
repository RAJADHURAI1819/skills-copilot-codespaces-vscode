// Create web server
// Create a web server using the http module.
const http = require('http');
const server = http.createServer(function(req, res) {
    res.write('Hello World!');
    res.end();
});
server.listen(3000, function() {
    console.log('Server is listening on port 3000. Ready to accept requests!');
});
// Create a web server using the express module.