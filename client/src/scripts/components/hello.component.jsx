import React, { Component } from 'react';
import Http from '../services/http.jsx';

class Hello extends Component{

	constructor(){
		super();
		this.state = {
			items:[]
		}
	}

	componentWillMount(){
		Http({
			method:'GET',
			url:'/data'
		}).then(function(res){
			this.setState({
				items:JSON.parse(res)
			});
		}.bind(this));
	}

	render(){
		return(<div>
				<h1>hello!</h1>
				{this.state.items.map((item,i)=>(<div key={i}>
						<span>id: {item.id} </span> 
						<span>name: {item.name} </span> 
						<span>description: {item.description} </span> 
						<span>phone: {item.phone} </span> 
					</div>))}
			</div>);
	}

}

export default Hello;