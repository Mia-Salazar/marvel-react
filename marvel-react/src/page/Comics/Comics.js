import React, { useState, useEffect } from 'react';
import { Container, Dimmer, Loader, Card } from 'semantic-ui-react';

import { getComicsAxios } from '../../services/comicService';
import { Comic } from '../../components/Comic/Comic';

import './Comics.scss';

export const Comics = () => {
	const [loading, setLoading] = useState(false);
	const [comics, setComics] = useState([]);
	let isEmpty = false;

	useEffect(() => {
		setLoading(true);
		getComicsAxios().then((json) => {
			const comicsMarvel = json.comics.filter(comics => comics.publisher === 'MARVEL COMICS');
			if (comics.length < 0) {
				isEmpty = true;
			} else {
				setComics(comicsMarvel)
			}
			setLoading(false);
		})
	}, [setComics]);

	return (
		<Container className="comics section">
			<h1 className="title">Últimos comics</h1>
			{loading &&
				<Dimmer active>
					<Loader />
				</Dimmer>
			}
			<Card.Group>
				{isEmpty
					? 'No hay comics nuevos de Marvel'
					: comics.map((comic) => {
						return <Comic></Comic>
					})
				}
			</Card.Group>

		</Container>
	)
}