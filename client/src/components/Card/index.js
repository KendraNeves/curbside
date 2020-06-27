import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function CardListing(props) {
    return(
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>{props.listingTitle}</Card.Title>
    <Card.Text>
      {props.listingDescription}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroup.Item>{props.location}</ListGroup.Item>
  </ListGroup>
  <Card.Body>
{props.modalButton}
  </Card.Body>
</Card>
    )
};
export default CardListing;
