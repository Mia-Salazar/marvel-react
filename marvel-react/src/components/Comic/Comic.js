import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

import marvel from '../../assets/img/marvel.png';
import './Comic.scss';

export const Comic = ({comic}) => {
	return (
    <Card className="comic">
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={marvel}
        />
        <Card.Header>{comic.title}</Card.Header>
          <Card.Meta>{comic.creators}</Card.Meta>
          <Card.Description className="price">
          {comic.price}
          </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Ver más
          </Button>
        </div>
      </Card.Content>
    </Card>
	)
}