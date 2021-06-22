import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Container, Dimmer, Loader} from 'semantic-ui-react';

import { Detail } from '../../components/Detail/Detail';
import { getComicDetails } from '../../services/detailComicService';
import './Details.scss';

export const Details = () => {
    const { id } = useParams();
	const [loading, setLoading] = useState(false);
	const [isEmpty, setIsEmpty] = useState(true);
	const [comic, updateComic] = useState({});

	useEffect(() => {
		setLoading(true);
		getComicDetails(id).then((json) => {
            console.log(json)
            updateComic(json.comics[0])
            setIsEmpty(false);
			setLoading(false);
		}).catch(exception => {
			setLoading(false);
	 });
	}, []);

	return (
		<Container className="details section">
			<h1 className="title">Información completa sobre el comic</h1>
			{loading &&
				<Dimmer active>
					<Loader />
				</Dimmer>
			}
            {isEmpty && !loading
                ? 'No hay detalles de este comic'
                : <Detail comic={comic}></Detail>
            }
		</Container>
	)
}