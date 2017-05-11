import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Home from './home.component.jsx';
import Hello from './hello.component.jsx';

class Main extends Component{

	render(){
		return(
				<div>
					<Route exact path="/" component={Home}/>
					<Route path="/hello" component={Hello}/>
				</div>
			)
	};

};

export default Main;