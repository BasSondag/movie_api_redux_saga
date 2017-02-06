import React from 'react';
import {render} from 'react-dom';

import css from './static/styles/style.styl'
/////// componets

import Main from './components/Main';

////// import react router dependecies

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
	<Router history={browserHistory}>
		<Route path ='/' component={Main}></Route>
	</Router>
)

render(router, document.getElementById('root'))