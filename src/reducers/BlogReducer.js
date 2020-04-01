import _ from 'lodash';

export default (state = {}, action) => {
	switch (action.type) {
		case 'FETCH_BLOGS':
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		case 'FETCH_CAT_BLOGS':
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		default:
			return state;
	}
};
