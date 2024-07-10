import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'

const help = props => {
  return (
    <Container className="p-5">
      <h2>{props.helpText}</h2>
      <hr/>
    </Container>
  )
}

help.propTypes = {  
  helpText: PropTypes.string.isRequired
}

export default help
