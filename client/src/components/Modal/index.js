
import React, { useState } from 'react';
import "../../App.css";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';


function AppModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
      <Modal show={modalShow} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          {props.content}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Col  size="md-6">
                <p>{props.description}</p>
            </Col>
            <Row>
            <Col  size="md-12">
                <p>{props.location}</p>
            </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-custom" variant="custom" onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
        <Button className="btn-custom" variant="custom" onClick={() => setModalShow(true)}>
          View
        </Button>
    </>);
  }
  
  export default AppModal;

