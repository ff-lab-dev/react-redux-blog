import React from 'react';
import { Grid, Card, Image, Transition } from 'semantic-ui-react';

import '../../css/index.css';


class BlogCard extends React.Component {
	render() {
		const { title, description, views, img, id } = this.props.blog;
		return (
			<Transition animation="scale" duration={500}>
				<Grid.Column widescreen={8}>
					<Card className="blog-card" color="red" fluid centered>
						<a onClick={() => null} href={`/blog/details/${id}`}>
							<Image className="blog-card-img" src={img} />
						</a>
						<Card.Content>
							<Card.Header className="blog-card-title">
								<span>{title}</span>
							</Card.Header>
							<Card.Meta className="blog-card-meta">
								<span>@Yusuf.Aydemir</span>
								<span style={{ float: 'right', marginLeft: '2px' }}>{views}</span>
								{/* <RemoveRedEye className="blog-card-icon" fontSize="small" style={{ float: 'right' }} /> */}
							</Card.Meta>
						</Card.Content>
					</Card>
				</Grid.Column>
			</Transition>
		);
	}
}

export default BlogCard;
