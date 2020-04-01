export default (state = 'all', action) => {
	switch (action.type) {
		case 'SET_ACTIVE_ITEM':
			return action.payload;
		default:
			return state;
	}
};
