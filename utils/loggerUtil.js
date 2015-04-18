function getTime () {
    var date = new Date();
        return([date.getHours(),date.getMinutes(), date.getSeconds() ].join(":"));
}

var loggerApi = {

	routeLogger: function(req, res, next) {
        console.log("Route", req.path , "Method", req.method, "Time", getTime());
		return next();
	},

	responseErrorLogger: function(err, req, res, next){
        console.log("Route", req.path , "Method", req.method, "Time", getTime());
		res.status(404).send('HEY !!! ITS 404');
        return next();
	}
};

module.exports = loggerApi;