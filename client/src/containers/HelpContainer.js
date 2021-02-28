import React from 'react'
import { connect } from 'react-redux'
import Help from '../components/help'


const HelpContainer = (props) => (
  <div> <h1>{props.helpText}</h1></div>
)

const mapStateToProps = (state) => ({
  helpText: state.help.helpText
})

export default connect(
  mapStateToProps
)(Help)
