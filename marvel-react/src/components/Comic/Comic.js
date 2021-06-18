import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

import marvel from '../../assets/img/marvel.png'

export const Comic = () => {
	return (
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={marvel}
        />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
	)
}