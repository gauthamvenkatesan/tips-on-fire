import React from 'react'
import { connect } from 'react-redux'


const HelpContainer = (props) => (
  <div> <h1>Help</h1></div>
)

const mapStateToProps = (state) => ({
  products: state
})

export default connect(
  mapStateToProps
)(HelpContainer)
