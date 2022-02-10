import React from 'react'
import {Button, Col, Form, Row } from 'react-bootstrap'

const NewUser = () => {
    return (
        <div>
                 <Form className="Form">
                 <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
  <br/>
  <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="number" placeholder="Phone" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
           
            <Row>
    <Col>
    <Form.Control type="password" placeholder="Password" />
    </Col>
    <Col>
    <Form.Control type="password" placeholder="Reprat Password" />
    </Col>
  </Row>
  
  <br/>
  <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedbackType="invalid"
        />
      </Form.Group>
           
            <Button
            variant="light" className="submit">Create Account</Button>
        </Form>
        </div>
    )
}

export default NewUser
