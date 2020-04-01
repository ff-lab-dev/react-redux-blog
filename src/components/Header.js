import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';

const Header = () => {
	const lang = [
		{
			key   : 'English',
			text  : 'English',
			value : 'English'
		},
		{
			key   : 'Turkish',
			text  : 'Turkish',
			value : 'Turkish'
		}
	];
	return (
		<div className="ui large menu">
			<Link to="/" className="item">
				<img
					className="ui mini image"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfISJ80aijWwPIjStqGeNBeErlpkaY9Jyo3ykYycFn4h6UkbBf&s"
				/>
			</Link>
			<Link to="/feeds" className="item">
				Feeds
			</Link>
			<Link to="/games" className="item">
				Games
			</Link>
			<Link to="/technology" className="item">
				Technology
			</Link>
			<Link to="/web" className="item">
				Web Development
			</Link>
			<Link to="/info" className="item">
				Info
			</Link>
			<Link to="/contact" className="item">
				Contact
			</Link>
			<div className="right menu">
				<div className="item">
					<Dropdown placeholder="Language" closeOnEscape selection options={lang} />
				</div>
				<div className="item">
					<div className="ui primary button">Sign In</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
