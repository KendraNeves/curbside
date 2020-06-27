        <Nav />
        <div style={{maxWidth:'1200px', margin:'2rem auto'}}>
          <div style={{ textAlign:'center', marginBottom:'2rem'}}>
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
                      <DeleteBtn onClick={() => deleteListing(listing._id)}/>
                    </ListItem>
                  )})}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
            <Col size="md-6 input">
              <form>

                <ImageUpload />
                <br/>
                <br/>

                <Input onChange={handleInputChange} name="listing_title" placeholder="listing title" value={formObject.listing_title}/>
                <Input onChange={handleInputChange} name="listing_description" placeholder="listing description" value={formObject.listing_description}/>
                <Input onChange={handleInputChange} name="listing_condition" placeholder="condition (used, new, etc.)" value={formObject.listing_condition}/>
                <Input onChange={handleInputChange} name="listing_location" placeholder="city, state" value={formObject.listing_location}/>
                <Form.Group controlId="exampleForm.ControlSelect1">
               <InputGroup.Prepend>
                 <InputGroup.Text>item type:</InputGroup.Text>
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