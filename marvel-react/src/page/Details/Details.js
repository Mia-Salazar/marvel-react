import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Container, Dimmer, Loader, Card, Button, Icon } from 'semantic-ui-react';

import { getComicDetails } from '../../services/detailComicService';

export const Details = () => {
    const { id } = useParams();
	const [loading, setLoading] = useState(false);
	const [isEmpty, setIsEmpty] = useState(true);
	const [comics, updateComics] = useState([]);

	useEffect(() => {
		setLoading(true);
		getComicDetails(id).then((json) => {
            console.log(json)
            setIsEmpty(false);
			setLoading(false);
		}).catch(exception => {
			setLoading(false);
	 });
	}, []);

	return (
		<Container className="comics section">
			<h1 className="title">Información completa sobre el comic</h1>
			{loading &&
				<Dimmer active>
					<Loader />
				</Dimmer>
			}
			<Card.Group>
				{isEmpty && !loading
					? 'No hay detalles de este comic'
					: 'Hay detalles'
				}
			</Card.Group>
		</Container>
	)
}