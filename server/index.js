var express = require('express');
var app = express();
var cors = require('cors');
var jwt = require('jwt-simple');
var bodyParser = require('body-parser');

require('dotenv').load();

app.use(cors({
	origin:'http://localhost:3000'
}));
app.use(bodyParser.json());

var users = {
	'me':'hey'
};

app.post('/auth',(req,res)=>{
	console.log(req.body);
	let user = users[req.body.name]
	if(user && req.body.password === user){
		let token = jwt.encode({name:req.body.name},process.env['secret']);
		res.status(200).send(token);
	}else{
		res.status(403).send('auth failed');
	}
})

var auth = require('./middleware/auth.js');
app.use(auth);

app.get('/usercheck',function(req,res){
	res.send(true);
})

app.get('/data',function(req,res){
	console.log(req.user);
	res.send('hello from the data!');
});

app.listen(2020,function(){
	console.log('listening on 2020!');
});