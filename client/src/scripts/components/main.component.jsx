import React, { Component } from 'react';
import { Route } from 'react-router-dom';


import Home from './home.component.jsx';
import Hello from './hello.component.jsx';

import Auth from '../services/auth.jsx';


class Main extends Component{

	constructor(){
		super();
		this.state = {};
	}

	componentWillMount(){
		if(Auth.check()){
			this.setState({
				loggedIn:true
			});
		}else{
			this.setState({
				loggedIn:false
			});
			this.props.history.replace('/login');
		}
	}
	componentWillReceiveProps(){
		if(Auth.check()){
			this.setState({
				loggedIn:true
			});
		}else{
			this.setState({
				loggedIn:false
			});
		}
	}

	logout(){
		Auth.logout();
		this.setState({
			loggedIn:false
		});
		this.props.history.replace('/login');
	}

	render(){
		let button = this.state.loggedIn?<button onClick={this.logout.bind(this)}>log out!</button>:null;
		return (<div>
				{button}
				<Route path="/" exact component={Home}/>
				<Route path="/hello" exact component={Hello}/>
			</div>);
	}

}

export default Main;