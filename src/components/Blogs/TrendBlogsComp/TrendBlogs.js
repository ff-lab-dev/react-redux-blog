import React from 'react';
import { Card, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { setActiveItem } from '../../../actions';
import TrendBlogsContent from './TrendBlogsContent';
import CategoryBlogs from '../CategoryBlogs';

class TrendBlogs extends React.Component {
	renderTrendContent () {
		console.log(this.props.activeItem);

		if (this.props.activeItem === 'all') {
			return <TrendBlogsContent />;
		}
		else {
			return <CategoryBlogs />;
		}
	}
	render () {
		return (
			<Card style={{ marginTop: '20px' }} fluid color="teal">
				<Card.Content>
					<Card.Header style={{ marginTop: '3px' }}>Trend İçerikler</Card.Header>
					<Menu pointing>
						<Menu.Item
							content="Tümü"
							active={this.props.activeItem === 'all'}
							onClick={() => this.props.setActiveItem('all')}
						/>
						<Menu.Item
							content="Javascript"
							active={this.props.activeItem === 'javascript'}
							onClick={() => this.props.setActiveItem('javascript')}
						/>
					</Menu>
					{this.renderTrendContent()}
				</Card.Content>
			</Card>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		activeItem : state.activeItem
	};
};
export default connect(mapStateToProps, { setActiveItem })(TrendBlogs);
