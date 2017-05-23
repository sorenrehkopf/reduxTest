import React, { Component } from 'react';
import Http from '../services/http.jsx';

import Dataset from './dataset.component.jsx';

class Hello extends Component{

	constructor(){
		super();
		this.state = {
			items:[]
		}
		this.header = {
			id:'id',
			name:'name',
			description:'description',
			phone:'phone'
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
				<div className="table">
					<Dataset item={this.header}/>
					{this.state.items.map((item,i)=>(<Dataset key={i} item={item}/>))}
				</div>
			</div>);
	}

}

export default Hello;