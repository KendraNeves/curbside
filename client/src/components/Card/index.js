import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../../utilities/search/search.css"
function CardListing(props) {
  return (
    <Card style={{ width: "18rem", }}>
      <Card.Img variant="top" src={props.listingImage} style={{ objectFit: "cover", width: "auto", height: "10rem", overflow: "hidden" }} />
      <Card.Body>
        <Card.Title><a href={"/listings/" + props.listingId}>{props.listingTitle}</a></Card.Title>
        <Card.Text>{props.listingDescription}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.location}</ListGroup.Item>
      </ListGroup>
      <Card.Body>{props.modalButton}</Card.Body>
    </Card>
  );
}
export default CardListing;
