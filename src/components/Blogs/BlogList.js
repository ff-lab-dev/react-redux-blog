import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import BlogCard from './BlogCard';
import { fetchBlogs } from '../../actions';

class BlogList extends React.Component {
	componentDidMount () {
		this.props.fetchBlogs();
	}

	render () {
		return (
			<Grid stackable centered columns={4}>
				{this.props.blogs.map((blog) => {
					return <BlogCard key={blog.id} blog={blog} />;
				})}
			</Grid>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		blogs : Object.values(state.blogs)
	};
};
export default connect(mapStateToProps, { fetchBlogs })(BlogList);
