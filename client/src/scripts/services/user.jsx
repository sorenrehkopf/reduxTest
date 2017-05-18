import Http from './http.jsx';
import { browserHistory } from 'react-router-dom';

class User{

	check(){
		if(!localStorage.getItem('authToken')){
			return false;
		}else{
			return true;
		}
	}

	set(){
		localStorage.setItem('authToken','atoken!!');
	}

}

export default new User();