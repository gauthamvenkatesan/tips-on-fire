import React from 'react'
import PropTypes from 'prop-types'
import ListGroup from 'react-bootstrap/ListGroup'
import Octicon, {Skip, Play, Plus} from '@primer/octicons-react'

function Coursecard (props) {

  return (
    <ListGroup as="ul">
        {props.courseArr.map( courseObj => { return courseObj.title === "Add Custom Excercise" ? 
          (<ListGroup.Item variant="primary" action key={courseObj.id} onClick={() =>{props.OnClickHandler(courseObj)}}>
            <Octicon  icon={Plus} aria-label="start" verticalAlign="middle" size="medium"/> 
            {`    ${courseObj.title}`}
            </ListGroup.Item> ) 
         :
          (<ListGroup.Item action key={courseObj.id} onClick={() => props.OnClickHandler(courseObj)}>
            <Octicon  icon={props.inProgressCourseId === courseObj.id ? Skip : Play} aria-label="start" verticalAlign="middle" size="medium"/> 
            {`    ${courseObj.title}`}
            </ListGroup.Item> )})}
    </ListGroup> )
  
}

Coursecard.propTypes = {
  courseArr: PropTypes.array.isRequired,
  OnClickHandler: PropTypes.func.isRequired,
}

export default Coursecard
