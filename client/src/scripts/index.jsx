import React, { Component } from 'react';
import {render} from 'react-dom';
import {BrowserRouter,Route,IndexRoute,browserHistory} from 'react-router-dom';

import Login from './components/login.component.jsx';
import Main from './components/main.component.jsx';
import User from './services/user.jsx';

function hello(){
	console.log('hey!');
}

render(<BrowserRouter history="browserHistory">
			<div>
				<Route path="/" component={Main}/>
				<Route path="/login" component={Login}/>
			</div>
		</BrowserRouter>
	, document.getElementById('app-container'));