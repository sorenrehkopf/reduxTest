function Http(config){
	return new Promise(function(resolve,reject){
		var req = new XMLHttpRequest();
		req.open(config.method,config.url);
		req.send(config.data||null);
		req.onreadystatechange = function(){
			console.log(req.readyState)
			if(req.readyState === 4){
				if(req.status === 200){
					resolve(req.response);
				}
			}
		}
	});
}

export default Http;