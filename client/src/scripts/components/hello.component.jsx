import React, { Component } from 'react';
import Http from '../services/http.jsx';

class Hello extends Component{

	constructor(){
		super();
		this.state = {}
	}

	componentWillMount(){
		Http({
			method:'GET',
			url:'/data'
		}).then(function(res){
			this.setState({
				text:res
			});
		}.bind(this));
	}

	render(){
		return(<h1>hello! {this.state.text}</h1>)
	}

}

export default Hello;