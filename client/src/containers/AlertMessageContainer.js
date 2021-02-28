import React from 'react'
import { connect } from 'react-redux'
import Alert from 'react-bootstrap/Alert'
import {hideAlert} from '../actions/action'

const AlertMessage = ({message, variant, show, onClickHandler})  => (
    show ?  <Alert style={{margin:'1% 5%'}} dismissible variant={variant ? variant : 'danger'} onClose={onClickHandler}> {
                 message instanceof Array ? message.map( (msg,index) => <p key={index} className="mb-0">{msg}</p> ) :  message } 
            </Alert> 
         :  <Alert style={{margin:'1% 5%'}}  ></Alert>   
)

const mapStatetoProps = (state, ownProps) => ({
    message : state.alert.message,
    variant : state.alert.variant,
    show : state.alert.show
})

const mapDispatchToProps = dispatch => ({
    onClickHandler: () => dispatch(hideAlert())

})

export default connect(mapStatetoProps, mapDispatchToProps)(AlertMessage) ;

