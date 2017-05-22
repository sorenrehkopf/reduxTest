import React, { Component } from 'react';
import {render} from 'react-dom';
import {BrowserRouter,Route,IndexRoute,browserHistory} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import appReducers from './reducers'

import Login from './components/login.component.jsx';
import Main from './components/main.component.jsx';

import Http from './services/http.jsx';

var store = createStore(appReducers);

render(<Provider store={store}>
		<BrowserRouter history="browserHistory">
			<div>
				<Route path="/" component={Main}/>
				<Route path="/login" component={Login}/>
			</div>
		</BrowserRouter>
		</Provider>
	, document.getElementById('app-container'));