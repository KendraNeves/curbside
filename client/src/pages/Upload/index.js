import React, { useState, useEffect } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utilities/API";
import Nav from '../../components/Nav';
import "../../App.css";
function Upload() {

  // Initialize books as an empty array
    const [listings, setListings] = useState([]);
    const [formObject, setFormObject] = useState({
        listing_title: "",
        listing_description:"",
        listing_condition: "", 
        listing_location: ""
    })
  
    useEffect(() => {
      loadListings();
    }, []);

    function loadListings() {
      API.getListings()
      .then(response => setListings(response.data))
      .catch(error => console.log(error));
    };

    function deleteListing(id){
      API.deleteListing(id)
        .then(res => loadListings())
        .catch(error => console.log(error));
    };
    function handleInputChange(event){
      const {name, value} = event.target;
      setFormObject({...formObject, [name]: value })
    };
    function handleFormSubmit(event){
      event.preventDefault();
      if(formObject.listing_title && formObject.listing_location){
        API.saveListing({
          listing_title: formObject.listing_title,
          listing_description:formObject.listing_description,
          listing_condition: formObject.listing_condition, 
          listing_location: formObject.listing_location
        })
        .then(() => setFormObject({
            listing_title: "",
            listing_description:"",
            listing_condition: "", 
            listing_location: ""
        }))
        .then(() => loadListings())
        .catch(error =>console.log(error));
      }
    }
    return (
      <div className="App">
      <head>
      </head>
      <Nav />
      <Container fluid>
        <Row>
          <Col size="md-6">
            <form>
              <Input onChange={handleInputChange} name="listing_title" placeholder="listing title" value={formObject.listing_title}/>
              <Input onChange={handleInputChange} name="listing_description" placeholder="listing description" value={formObject.listing_description}/>
              <Input onChange={handleInputChange} name="listing_condition" placeholder="condition (used, new, etc.)" value={formObject.listing_condition}/>
              <Input onChange={handleInputChange} name="listing_location" placeholder="city, state" value={formObject.listing_location}/>
              <FormBtn onClick={handleFormSubmit}> Submit Listing</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            
            {listings.length ? (
              <List>
                {listings.map(listing => {
                  return (
                  <ListItem key={listing._id}>
                    <a href={"/listings/" + listing._id}>
                      <strong>
                        {listing.listing_title} in {listing.listing_location}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => deleteListing(listing._id)}/>
                  </ListItem>
                )})}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
      </div>
    );
  }

export default Upload;
