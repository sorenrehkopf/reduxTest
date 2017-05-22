import React, { Component } from 'react';

import Auth from '../services/auth.jsx';
import getFormData from '../services/getFormData.jsx';

class Login extends Component{
 
	login(e){
		e.preventDefault();
		let data = getFormData(e.nativeEvent.target);
		Auth.authenticate(data,function(){
			this.props.history.replace('/hello');
		}.bind(this));
	}

	render(){
		return(<form onSubmit={this.login.bind(this)}>
			<input type="text" name="name" placeholder="Name"/>
			<input type="password" name="password" placeholder="password"/>
			<button>submit</button>
		</form>)
	}

}

export default Login;