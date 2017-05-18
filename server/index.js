var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors({
	origin:'http://localhost:3000'
}));

app.get('/',(req,res)=>{
	setTimeout(function(){
		res.send('hey what up!!');
	},2000);
	
})

app.listen(2020,function(){
	console.log('listening on 2020!');
});