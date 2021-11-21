import React from "react";
import Row from "react-bootstrap/Row"
import Col from"react-bootstrap/Col";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl"


function FormContent() {
  return(
    <>
      <Row>
        <Col>
          <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="email" />
            </Form.Group>
            <Form.Label htmlFor="basic-url">Website</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">
                  https://
                </InputGroup.Text>
              <FormControl id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={6} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col >
        <div className="contact-info-wrapper">
          <div className="contact-info">
              <i class="fas fa-envelope"></i> 
              <p>hello@yay.com</p>
            </div>
            <div className="contact-info">
              <i class="fas fa-phone"></i>
              <p>123 456 7890</p>
            </div>
          
            <div className="contact-info">
            <i class="fas fa-map-marker-alt"></i>
            <p>
              123 Some Street <br></br>
              Somewhere <br></br>
              Some City <br></br>
              10000
            </p>
          </div>
        </div>
        </Col>
      </Row>
      
    </>

  )
}

export default FormContent;