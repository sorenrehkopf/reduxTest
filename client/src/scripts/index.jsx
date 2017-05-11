import React, { Component } from 'react';
import {render} from 'react-dom';
import {BrowserRouter,Route,IndexRoute,browserHistory} from 'react-router-dom';

import Home from './components/home.component.jsx';
import Hello from './components/hello.component.jsx';

render(<BrowserRouter history="browserHistory">
			<div>
				<Route exact path="/" component={Home}/>
				<Route path="/hello" component={Hello}/>
			</div>
		</BrowserRouter>
	, document.getElementById('app-container'));