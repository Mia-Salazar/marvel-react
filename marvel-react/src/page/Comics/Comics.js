import React, { useState, useEffect } from 'react';
import { Container, Dimmer, Loader, Card, Button, Icon } from 'semantic-ui-react';

import { getComicsAxios } from '../../services/comicService';
import { Comic } from '../../components/Comic/Comic';

import './Comics.scss';

export const Comics = () => {
	const [loading, setLoading] = useState(false);
	const [isEmpty, setIsEmpty] = useState(false);
	const [noLoadMore, updateNoLoadMore] = useState(false);
	const [comics, updateComics] = useState([]);
	const [allComics, setAllComics] = useState([]);

	const loadMore = (event) => {
		if (comics.length === allComics.length) {
			updateNoLoadMore(true);
		} else {
			let addMoreComics = allComics.splice(comics.length, comics.length + 9);
			updateComics(comics.concat(addMoreComics));
		}
	};

	useEffect(() => {
		setLoading(true);
		getComicsAxios().then((json) => {
			const comicsMarvel = json.comics.filter(comics => comics.publisher === 'MARVEL COMICS');
			if (comicsMarvel.length < 0) {
				setIsEmpty(true);
				updateNoLoadMore(true);
			} else {
				setAllComics(comicsMarvel);
				let comicsFirstPage = allComics.splice(0,9);
				updateComics(comicsFirstPage);
			}
			setLoading(false);
		}).catch(exception => {
			setLoading(false);
			setIsEmpty(true);
			updateNoLoadMore(true);
	 });
	}, []);

	return (
		<Container className="comics section">
			<h1 className="title">Últimos comics</h1>
			{loading &&
				<Dimmer active>
					<Loader />
				</Dimmer>
			}
			<Card.Group>
				{isEmpty && !loading
					? 'No hay comics nuevos de Marvel'
					: comics.map((comic, index) => {
						return <Comic key={index} comic={comic}></Comic>
					})
				}
			</Card.Group>
			{!noLoadMore
			?
			<div className="button-group">
				<Button color='red' icon labelPosition='right' onClick={loadMore}>
					Cargar más
					<Icon name='right arrow' />
				</Button>
			</div>
			: ''}
		</Container>
	)
}