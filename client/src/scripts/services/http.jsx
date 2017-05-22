function Http(config){
	return new Promise(function(resolve,reject){
		var req = new XMLHttpRequest();
		if(config.url.indexOf('http')===-1) config.url = 'http://localhost:2020'+config.url;
		console.log(config.url);
		req.open(config.method,config.url);
		if(localStorage.getItem('authToken')) req.setRequestHeader('authtoken', localStorage.getItem('authToken'));
		req.setRequestHeader('Content-type', 'application/json');
		req.send(JSON.stringify(config.data)||null);
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