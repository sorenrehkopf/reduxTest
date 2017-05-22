import React, { Component } from 'react';
import { Route } from 'react-router-dom';


import Home from './home.component.jsx';
import Hello from './hello.component.jsx';

import Auth from '../services/auth.jsx';


class Main extends Component{

	componentWillMount(){
		if(!Auth.check()) this.props.history.replace('/login');
	}

	render(){
		return (
			<div>
				<Route path="/" exact component={Home}/>
				<Route path="/hello" component={Hello}/>
			</div>
			)
	}

}

export default Main;