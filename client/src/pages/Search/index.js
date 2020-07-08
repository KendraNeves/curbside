import React from "react";
import { Container } from "../../components/Grid";
import Nav from '../../components/Nav';
import "../../App.css";
import Results from '../../utilities/search/results-function';

function Homepage() {
    return (
        <div className="search">
            <Nav />
            <Container fluid>
                <Results />
            </Container>
        </div>
    )
}
export default Homepage;
