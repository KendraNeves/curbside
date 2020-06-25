import React from "react";
import '../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
function TableHeader(props) {
    return (
        <>
      <Container fluid>
          <thead className="">
              <Row className="employee-row sticky-top">
                  <Col className="hover-pointer heading" onClick={props.sortByName}>Name</Col>
              </Row>
          </thead>
          <tbody className="employee-row">
              {props.listings.map(listing => (
                  <Row key={listing._id} className="employee-row">
                      <Col>{listing.listing_title}  </Col>
                  </Row>
              ))}
          </tbody>
      </Container >
      </>
  )
}


export default TableHeader