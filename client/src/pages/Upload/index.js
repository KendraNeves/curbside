import React, { useState, useEffect } from "react";
import Geocode from "react-geocode";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Form from 'react-bootstrap/Form';
import ImageUpload from "../../components/ImageBox/imageUpload";
import API from "../../utilities/API";
import Nav from '../../components/Nav';
import InputGroup from 'react-bootstrap/InputGroup'
import "../../App.css";
import './style.css';

function Upload() {
  const Categories = [
    { key: 1, value: "Furniture" },
    { key: 2, value: "Electronics" },
    { key: 3, value: "Apparral" },
    { key: 4, value: "Toys/Games" },
    { key: 5, value: "Books" }
  ]
  // Initialize books as an empty array
  const [listings, setListings] = useState([]);
  const [formObject, setFormObject] = useState({
    listing_title: "",
    listing_description: "",
    listing_condition: "",
    listing_location: "",
    listing_category: "",
    listing_latlong: null
  });

  const onCategoriesSelectChange = (event) => {
    setCatergoriesValue(event.currentTarget.value)
  }
  const [CategoriesValue, setCatergoriesValue] = useState(1);

  useEffect(() => {
    loadListings();
  }, []);

  function loadListings() {
    API.getListings()
      .then(response => setListings(response.data))
      .catch(error => console.log(error));
  };

  function deleteListing(id) {
    API.deleteListing(id)
      .then(res => loadListings())
      .catch(error => console.log(error));
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  function handleFormSubmit(event) {
    event.preventDefault();

    if (formObject.listing_title && formObject.listing_location) {
      // added to geocode address to obtain listing_latlong a single time during upload
      Geocode.fromAddress(formObject.listing_location)
        .then(
          response => {
            console.log(response);
            const latlng = response.results[0].geometry.location;
            setFormObject({ ...formObject, listing_latlong: latlng });
            return latlng
          },
          error => {
            console.error(error);
          }
        )
        .then(latlng => {
          API.saveListing({
            listing_title: formObject.listing_title,
            listing_description: formObject.listing_description,
            listing_condition: formObject.listing_condition,
            listing_location: formObject.listing_location,
            listing_latlong: latlng
          })
        })
        .then(() => setFormObject({
          listing_title: "",
          listing_description: "",
          listing_condition: "",
          listing_location: "",
          listing_category: "",
          listing_latlong: ""
        }))
        .then(() => loadListings())
        .catch(error => console.log(error));
    }
  }
  return (
    <div className="App">
      <Nav />
      <div style={{ maxWidth: '1200px', margin: '2rem auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2>Upload Item</h2>
        </div>
        <Container fluid>
          <Row>
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
                        <DeleteBtn onClick={() => deleteListing(listing._id)} />
                      </ListItem>
                    )
                  })}
                </List>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </Col>
            <Col size="md-6 input">
              <form>
                <ImageUpload />
                <br />
                <br />
                <Input onChange={handleInputChange} name="listing_title" placeholder="listing title" value={formObject.listing_title} />
                <Input onChange={handleInputChange} name="listing_description" placeholder="listing description" value={formObject.listing_description} />
                <Input onChange={handleInputChange} name="listing_condition" placeholder="condition (used, new, etc.)" value={formObject.listing_condition} />
                <Input onChange={handleInputChange} name="listing_location" placeholder="city, state" value={formObject.listing_location} />
                <label>Item Category</label>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <InputGroup.Prepend>
                    <Form.Control as="select" onChange={onCategoriesSelectChange}>
                      {Categories.map(item => (
                        <option key={item.key} value={formObject.CategoriesValue}>{item.value}</option>
                      ))}
                    </Form.Control>
                  </InputGroup.Prepend>
                </Form.Group>
                <FormBtn onClick={handleFormSubmit}> Submit Listing</FormBtn>
              </form>
            </Col>

          </Row>
        </Container>
      </div>
    </div >
  );
}

export default Upload;


