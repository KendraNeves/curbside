import React from "react";
import "../../App.css";
import Container from 'react-bootstrap/Container';

import Results from './results-function';
function FormContainer(props) {
  return (
      <>
  <Container fluid className="form-neo" {...props}>
  <Results />
  </Container>
    
    </>
  )
  
}

export default FormContainer;
