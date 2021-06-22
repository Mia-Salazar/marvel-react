import React, { useState, useEffect } from 'react';
import { Container, Dimmer, Loader, Card, Input, Checkbox } from 'semantic-ui-react';

import { Comic } from '../../components/Comic/Comic';
import { searchComic } from '../../services/searchService';
import './Searcher.scss';

export const Searcher = () => {
	const [loading, setLoading] = useState(false);
	const [isEmpty, setIsEmpty] = useState(false);
    const [isMarvel, setIsMarvel] = useState(true);
	const [comics, updateComics] = useState([]);
    const [input, setInput] = useState('');

	useEffect(() => {
        if (input !== '') {
            let publisher;
            if (!isMarvel) {
                publisher = '';
            } else {
                publisher = 'marvel';
            }
            const timeOutId = setTimeout(() => {
                setLoading(true);
                searchComic(input, publisher).then((json) => {
                    if (json.comics.length === 0) {
                        setIsEmpty(true);
                    } else {
                        setIsEmpty(false);
                        updateComics(json.comics);
                    }
                    setLoading(false);
                }).catch(exception => {
                    setLoading(false);
                    setIsEmpty(true);
             });
            }, 500);
            return () => clearTimeout(timeOutId);
        }
	}, [input, isMarvel]);

    const newSearch = (event) => {
        setInput(event.target.value);
    }

    const changePublisher = (event) => {
        setIsMarvel(event.target.checked);
    }

	return (
		<Container className="searcher section">
			<h1 className="title">Búsqueda de comics</h1>
            <div className="text-container">
                <p className="text">Busca los comics de los que quieres recibir más información por títutlo</p>
                <Input placeholder='Buscar cómics por título' icon='search' className="input" onChange={newSearch}/>
                <Checkbox label='Comics solo de Marvel' className="checkbox" onChange={changePublisher} checked={isMarvel}/>
            </div>
			{loading &&
				<Dimmer active>
					<Loader />
				</Dimmer>
			}
			<Card.Group>
				{isEmpty && !loading && input !== ''
					? 'No hay comics con este filtro'
					: comics.map((comic, index) => {
						return <Comic key={index} comic={comic}></Comic>
					})
				}
			</Card.Group>
		</Container>
	)
}