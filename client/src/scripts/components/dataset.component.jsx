import React, { Component } from 'react';

const Dataset = (props) => {

	return(
		<div className="row">
			<span className="cell"><span className="label">id: </span>{props.item.id} </span> 
			<span className="cell"><span className="label">name: </span>{props.item.name} </span> 
			<span className="cell"><span className="label">description: </span>{props.item.description} </span> 
			<span className="cell"><span className="label">phone: </span>{props.item.phone} </span> 
		</div>
	)
}

export default Dataset;