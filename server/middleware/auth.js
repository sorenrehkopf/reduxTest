const jwt = require('jwt-simple');

var users = {
	'me':{
		data:'some data about me!'
	}
};

function authenticate(req,res,next){
	if(req.headers.authtoken){
		console.log(req.headers.authtoken);
		var name = jwt.decode(req.headers.authtoken,process.env['secret']);
		req.user = users[name.name];
		next();
	}
	next();
};

module.exports = authenticate;