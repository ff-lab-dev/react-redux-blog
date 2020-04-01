import { combineReducers } from 'redux';

import ActiveItemReducer from './ActiveItemReducer';
import BlogReducer from './BlogReducer';

export default combineReducers({
	blogs      : BlogReducer,
	activeItem : ActiveItemReducer
});
