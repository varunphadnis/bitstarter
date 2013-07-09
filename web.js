var express = require('express');
var fs = require('fs')


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	fs.readFileSync("index.html", function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
	});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
