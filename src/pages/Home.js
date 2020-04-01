import React from 'react';
import { Container, Divider, Segment, Header, Grid } from 'semantic-ui-react';

import Blog from '../components/Blogs/Blog';
import TrendBlogs from '../components/Blogs/TrendBlogsComp/TrendBlogs';
import LastBlogs from '../components/Blogs/LastBlogsComp/LastBlogs';
import CategoryBlogs from '../components/Blogs/CategoryBlogs';
import Comments from '../components/Blogs/UserComments/Comments';
import Feeds from '../components/Blogs/UserFeeds/Feeds';

const Home = () => {
	return (
		<Container>
			<div style={{ marginTop: '20px', marginBottom: '20px' }}>
				<Blog />
				<Divider />
				<TrendBlogs />
				<Divider />
				<LastBlogs />
				<Divider />
				<Grid columns={2} stackable>
					<Grid.Column>
						<Segment color="violet">
							<Header content="Javascript" as="h2" />
							<Divider />
							<CategoryBlogs home={'javascript'} />
						</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment color="blue">
							<Header content="Teknoloji" as="h2" />
							<Divider />
							<CategoryBlogs home={'teknoloji'} />
						</Segment>
					</Grid.Column>
				</Grid>
				<Divider />
				<Segment color="orange">
					<Header as="h3" content="Son paylaşılan feedler!" />
					<Divider />
					<Feeds />
				</Segment>
				<Divider />
				<Segment color="green">
					<Header content="Son yapılan yorumlar!" />
					<Divider />
					<Comments isDivided={false} />
				</Segment>
			</div>
		</Container>
	);
};

export default Home;
