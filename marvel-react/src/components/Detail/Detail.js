import React from 'react';
import { Icon, Card, Image } from 'semantic-ui-react';

import './Detail.scss';

export const Detail = ({comic}) => {
	return (
        <Card fluid className="detail">
            <Image src="https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1hcnZlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" wrapped ui={false} />
            <Card.Content>
            <Card.Header>{comic.title}</Card.Header>
            <Card.Meta>{comic.creators}</Card.Meta>
            <Card.Description>
                {comic.description}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className="price">
                    <Icon name='dollar sign' />
                    {comic.price}
                </div>
                <div className="date">
                    <Icon name='calendar alternate outline' />
                    {comic.release_date}
                </div>
            </Card.Content>
        </Card>
	)
}