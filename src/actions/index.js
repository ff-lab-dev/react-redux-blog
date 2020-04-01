import axios from '../apis/axios';
//import history from '../components/History';

export const fetchBlogs = () => async (dispatch) => {
	const response = await axios.get('/blogs');

	dispatch({ type: 'FETCH_BLOGS', payload: response.data });
};

export const fetchCatBlogs = (cat) => async (dispatch) => {
	const response = await axios.get(`/blogs/`, { params: { category: cat } });

	dispatch({ type: 'FETCH_CAT_BLOGS', payload: response.data });
};

export const setActiveItem = (item) => {
	return {
		type    : 'SET_ACTIVE_ITEM',
		payload : item
	};
};
