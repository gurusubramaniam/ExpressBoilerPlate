var express = require('express'),
	app = express(),
	logger = require('./utils/loggerUtil');

app.use(logger.routeLogger);



app.get('/', function (req, res){
    res.send('HELLO WORLD');
});

app.get('/redirect', function (req, res){
    res.redirect('/');
})

app.get('*', function(req, res, next) {
    var err = new Error();
    next(err);
});

app.use(logger.responseLogger);

var server = app.listen(3000, function(){
	var host = server.address().address,
        port = server.address().port;

	console.log("App running at", host, port);
});