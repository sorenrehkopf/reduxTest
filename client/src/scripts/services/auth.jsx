import Http from './http.jsx';
import { browserHistory } from 'react-router-dom';
// import 

class Auth{

	static check(){
		if(!localStorage.getItem('authToken')){
			return false;
		}else{
			return true;
		}
	}

	static authenticate(data,cb,eb){
		return Http({
			method:'POST',
			url:'/auth',
			data:data
		}).then(res=>{
			console.log(res);
			localStorage.setItem('authToken',res);
			if(cb) cb();
		}).catch(err=>{
			console.log(err);
			if(eb) eb();
		});
	}

	static logout(){
		localStorage.removeItem('authToken');
	}

}

export default Auth;