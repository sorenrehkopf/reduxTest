var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors({
	origin:'localhost:3000'
}));

app.get('/',(req,res)=>{
	res.send('hey what up!!');
})

app.listen(2020,function(){
	console.log('listening on 2020!');
});