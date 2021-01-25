import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'

const profile = props => {
  return (
    <Container className="p-5">
      <Alert variant="success"> Profile!! </Alert>
      <h2>Display member profile information</h2>
      <hr/>
    </Container>
  )
}

export default profile
