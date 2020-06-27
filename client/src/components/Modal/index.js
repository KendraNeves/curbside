
import React, { useState } from 'react';
import "../../App.css";
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
          <p>{props.description}</p>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          View
        </Button>
    </>);
  }
  
  export default AppModal;

