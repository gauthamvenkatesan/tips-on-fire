import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link}  from 'react-router-dom'
import typeWriter from '../assets/typeWriter.svg'
import PropTypes from 'prop-types'

const header = (props) => (

<Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand >
  <img
      src={typeWriter}
      width="30"
      height="30"
      className="d-inline-block align-top"
      alt="logo"
  />{' '}
  Finger Tips On Fire
  </Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link as={Link} to="/home">Home</Nav.Link>
    <Nav.Link as={Link} to="/help">Help</Nav.Link>
  </Nav>
  <Form inline className="pr-5">
    <Form.Text className="pr-3 light">
      <Link className="fc-light" to='/profile'>{props.username}</Link>
    </Form.Text>
    <Button variant="primary" size="sm">
      <Link className="fc-light" to='/login'>{props.loggedIn ? 'Log out': 'Login'}</Link>
    </Button>
  </Form>
</Navbar.Collapse>
</Navbar>
)


header.prototype = {
  username: PropTypes.string.isRequired
}

export default header;