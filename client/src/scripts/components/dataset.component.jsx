import React, { Component } from 'react';

const Dataset = (props) => {

	return(
		<div className="row">
			{Object.keys(props.item).map((key,i)=>(
				<span className="cell" key={i}>
					<span className="label">{key}: </span>
					{props.item[key]} 
				</span> 
			))}
		</div>
	)
}

export default Dataset;