import React from 'react';
import { connect } from 'react-redux';
import { Message, Grid } from 'semantic-ui-react';

import BlogCard from '../BlogCard';

//Yapılacaklar: new Date('01.01.2018') tarihi admin ekranından gelecek

class LastBlogsContent extends React.Component {
	renderContent () {
		if (this.props.blogs === []) {
			return (
				<Message error size="large">
					<Message.Header>Burada hiç blog yok!</Message.Header>
					<Message.Content>Diğer bloglarımıza bakmak ister misin?</Message.Content>
				</Message>
			);
		}
		else {
			const dateArray = [];
			return (
				<Grid columns={4} doubling>
					{this.props.blogs.map((blog) => {
						const blogDate = new Date(blog.date);
						if (blogDate > new Date('01.01.2020')) {
							return (
								<Grid.Column key={blog.id} widescreen={8}>
									<BlogCard key={blog.id} blog={blog} />
								</Grid.Column>
							);
						}
					})}
				</Grid>
			);
		}
	}
	render () {
		return <div>{this.renderContent()}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		blogs : Object.values(state.blogs)
	};
};
export default connect(mapStateToProps)(LastBlogsContent);
