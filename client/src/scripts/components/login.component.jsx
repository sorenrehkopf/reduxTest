import React, { Component } from 'react';

import User from '../services/user.jsx';

class Login extends Component{

	render(){
		return(<h1 onClick={User.set}>login!</h1>)
	}

}

export default Login;