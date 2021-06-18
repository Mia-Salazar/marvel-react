import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, Icon } from 'semantic-ui-react';

import './Header.scss';

const items = [
	{ key: 'home', active: true, name: 'Home' },
	{ key: 'comics', name: 'Comics' },
	{ key: 'my-collection', name: 'My collection' },
];

export const Header = () => {
	console.log('header')
	const handleClick = (event, c) => {
		console.log(c)
		updateLink(c.name)
	};
	const [linkActive, updateLink] = useState('home');

	return (
		<Menu inverted className="navbar">
			<div className="logo">
				<h1 className="logo-title">El coleccionista</h1>
				<Icon name='book' className="desktop"/>
			</div>
			{items.map((c) => (
				<Menu.Item
					as={Link} to={c.key}
					key={c.key}
					name={c.key}
					active={linkActive === c.key}
					onClick={handleClick}
				/>
			))}
		</Menu>
	)
}