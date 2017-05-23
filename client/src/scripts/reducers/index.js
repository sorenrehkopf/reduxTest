import { combineReducers } from 'redux';

import User from './user.jsx';
import Data from './data.jsx';

const appReducers = combineReducers({
	User,
	Data
});

export default appReducers;