import React, { Component } from 'react';
import Http from '../services/http.jsx';
import { connect } from 'react-redux';

import Dataset from './dataset.component.jsx';

const mapStateToProps = (state)=>({
	data:state.Data
});

const mapDispatchToProps = (dispatch)=>({
	setItems:function(data){
		dispatch({
			type:'SET_DATA',
			data:data
		})
	}
});

class Hello extends Component{

	constructor(){
		super();
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
			console.log('proooops!',this.props);
			this.props.setItems(JSON.parse(res));
		}.bind(this));
	}

	render(){
		return(<div>
				<h1>hello!</h1>
				<div className="table">
					<Dataset item={this.header}/>
					{this.props.data.map((item,i)=>(<Dataset key={i} item={item}/>))}
				</div>
			</div>);
	}

}

export default connect(mapStateToProps,mapDispatchToProps)(Hello);