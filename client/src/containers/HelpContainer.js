import React from 'react'
import { connect } from 'react-redux'


const HelpContainer = (props) => (
  <div> <h1>{props.helpText}</h1></div>
)

const mapStateToProps = (state) => ({
  helpText: state.help.helpText
})

export default connect(
  mapStateToProps
)(HelpContainer)
