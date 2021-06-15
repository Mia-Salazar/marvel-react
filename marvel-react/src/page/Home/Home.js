import React, { useState } from 'react';
import { Image, Container, Accordion, Icon } from 'semantic-ui-react';

import './Home.scss';

export const Home = () => {
	const handleClick = (event, accordion) => {
		updateAccordion(accordion.index)
	};
	const [accordionActive, updateAccordion] = useState('home');
	return (
		<Container className="home">
				<h1 className="home-title">El coleccionista</h1>
				<h2 className="home-subtitle">de <span>comics</span></h2>
				<div className="hero">
					<Image
					src='https://cdn.pixabay.com/photo/2017/04/09/16/40/batman-2216148_960_720.jpg'
					as='a'
					size='big'
					href='https://cdn.pixabay.com/photo/2017/04/09/16/40/batman-2216148_960_720.jpg'
					target='_blank'
					centered
					/>
				</div>
				<Accordion className="accordion">
					<Accordion.Title
						active={accordionActive === 0}
						index={0}
						onClick={handleClick}
					>
						<Icon name='dropdown' />
						¿Qué es el coleccionista?
					</Accordion.Title>
					<Accordion.Content active={accordionActive === 0}>
						<p>
							Es un proyecto creado por Mia Salazar para practicar con Redux y realizada con SCSS y con el framework de CSS Semantic UI
						</p>
					</Accordion.Content>

					<Accordion.Title
						active={accordionActive === 1}
						index={1}
						onClick={handleClick}
					>
						<Icon name='dropdown' />
						¿De dónde saca la información de los comics
					</Accordion.Title>
					<Accordion.Content active={accordionActive === 1}>
						<p>
							La información proviene de la API gratuita de Marvel, que se puede encontrar en este <a href="https://developer.marvel.com/" target="_blank">link</a>.
						</p>
					</Accordion.Content>

					<Accordion.Title
						active={accordionActive === 2}
						index={2}
						onClick={handleClick}
					>
						<Icon name='dropdown' />
						¿Cómo puedo contactar con Mia?
					</Accordion.Title>
					<Accordion.Content active={accordionActive === 2}>
						<p>
							Puedes contactar con Mia a través de su <a href="http://miasalazar.com" target="_blank">web</a>, en su <a href="https://twitter.com/chochomona" target="_blank">Twitter</a> o en su <a href="https://www.linkedin.com/in/miasalazar/" target="_blank">Linkedin</a>. También puedes escribirle un correo a <a href="maria.sgr@gmail.com">maria.sgr@gmail.com</a>
						</p>
					</Accordion.Content>
					<Accordion.Title
						active={accordionActive === 2}
						index={3}
						onClick={handleClick}
					>
						<Icon name='dropdown' />
						¿Es Mia una persona maja?
					</Accordion.Title>
					<Accordion.Content active={accordionActive === 2}>
						<p>
							Sí, sobre todo si le das chocolate
						</p>
					</Accordion.Content>
				</Accordion>
		</Container>
	)
}