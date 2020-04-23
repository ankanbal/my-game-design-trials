var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static('./'));
app.get('/game', (req, res)=>{
	res.sendFile(__dirname + "/index.html");
	res.end();
});

var server = app.listen(3000, ()=>{
	var host = server.address().address;
  	var port = server.address().port;
  	console.log('Example app listening at http://%s:%s', host, port);
});
