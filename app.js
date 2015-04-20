var express = require('express'),
	app = express(),
	logger = require('./utils/loggerUtil');

//Template Engine Configuration
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

//Set to load the Static CSS/JS files
app.use(express.static('public'));

//Middleware for routes logging the url and time.
app.use(logger.routeLogger);

// Routes
app.get('/', function (req, res) {
    res.send('HELLO WORLD');
});

app.get('/redirect', function (req, res) {
    res.redirect('/');
})

app.get('/renderHTML', function (req, res) {
    res.render('index', {title: 'HEY', message: 'You have successfully rendered template'});
});

app.get('*', function(req, res, next) {
    var err = new Error();
    next(err);
});
// End of Routes

//Middleware for routes Errorlogging .
app.use(logger.responseErrorLogger);

var server = app.listen(3000, function(){
	var host = server.address().address,
        port = server.address().port;

	console.log("App running at", host, port);
});