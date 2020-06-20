import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <Form.Control type="text" {...props}/>
  );
}

export function TextArea(props) {
  return (
    <InputGroup>
      <Form.Control  as="textarea" type="text" {...props}/>
      </InputGroup>
  );
}

export function FormBtn(props) {
  return (
    <Button {...props} style={{ float: "right", marginBottom: 10 }} variant="primary">{props.children}</Button>
      
  );
}
