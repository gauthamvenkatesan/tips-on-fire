import React from 'react'
import PropTypes from 'prop-types'
import ListGroup from 'react-bootstrap/ListGroup'
import Octicon, {Skip, Play, Plus} from '@primer/octicons-react'

function coursecard ({courseArr, OnClickHandler, inProgressCourseId}) {

 /* useEffect (() => {
    window.scrollTo(0,0)
  },[])*/

  return (
    <ListGroup as="ul">
        {courseArr.map( courseObj => { return courseObj.title === "Add Custom Excercise" ? 
          (<ListGroup.Item variant="primary" action key={courseObj.id} onClick={() =>{window.scrollTo(0, 0); OnClickHandler(courseObj)}}>
            <Octicon  icon={Plus} aria-label="start" verticalAlign="middle" size="medium"/> 
            {`    ${courseObj.title}`}
            </ListGroup.Item> ) 
         :
          (<ListGroup.Item action key={courseObj.id} onClick={() => OnClickHandler(courseObj)}>
            <Octicon  icon={inProgressCourseId === courseObj.id ? Skip : Play} aria-label="start" verticalAlign="middle" size="medium"/> 
            {`    ${courseObj.title}`}
            </ListGroup.Item> )})}
    </ListGroup>
  )
}

coursecard.propTypes = {
  courseArr: PropTypes.array.isRequired,
  OnClickHandler: PropTypes.func.isRequired,
}

export default coursecard
