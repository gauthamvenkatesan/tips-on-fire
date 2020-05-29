import React from 'react'
import PropTypes from 'prop-types'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import CourseCard from './coursecard'
import AddExcercise from './addExcerciseModal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Jumbotron from 'react-bootstrap/Jumbotron'

class home extends React.Component {

  componentDidMount(){
    console.log("home component component did mount",this.props);
    this.props.initApp();
  }

  render(){
    console.log("home component",this.props);
    let id =0;
    return (
      <Container className="p-5">
        <AddExcercise show={this.props.showAddExercise} onHide={this.props.onAddExcerciseClose} onAddExcerciseSubmit={this.props.onAddExcerciseSubmit} customexcercise={this.props.customExcercise}></AddExcercise>
        <Jumbotron tabIndex="1"   className={`no-outline ${this.props.excerciseProgress.status === "inprogress" ? "" : "d-none"} whiteboard`}>
          <Container>
            <div className="runnerContainer">
              {console.log("excerciseProgress",this.props, this.props.runnerArr)}
              {this.props.runnerArr.map( item => <span key={item.id} className={`runner-item ${this.props.excerciseProgress.currentItemId === item.id ? "current" : ""}`}>{item.char}</span> )}
            </div>
            <br/>
            <Container>
              <Row className="justify-content-between">
                <h2 id="typingCenter" >Character: {String.fromCharCode(this.props.excerciseProgress.enteredChar)}</h2>
                <h2 >Mistakes : {this.props.excerciseProgress.mistakes} </h2>
              </Row> 
            </Container>
          </Container>
        </Jumbotron>
        <Jumbotron className={`${this.props.excerciseProgress.status === "start" ? "" : "d-none"} whiteboard`}>
          <Container>
            <Form>
              <Form.Group  as={Row} controlId="formBasicRange">
                <Form.Label column lg={1} >Time</Form.Label>
                <Col lg={2}>
                  <Form.Control disabled={!this.props.excerciseProgress.timeMode} as="select" defaultValue="3 Mins">
                    <option>1</option>
                    <option>3</option>
                  </Form.Control>
                </Col>
                </Form.Group>
                <Form.Group   as={Row}>
                  <Form.Label column lg={1}>Strokes</Form.Label>
                  <Col lg={2}>
                    <Form.Control  onFocus={() => console.log("Strokes click")} disabled={this.props.excerciseProgress.timeMode} as="select" defaultValue="500">
                      <option>500</option>
                      <option>1000</option>
                    </Form.Control>
                  </Col>
              </Form.Group>
              <Button onClick={this.props.startPracticeHandler}>Start Practice</Button>
            </Form>
          </Container>
        </Jumbotron>

        <Jumbotron className={`${this.props.excerciseProgress.status === "completed" ? "" : "d-none"} whiteboard`}>
          <Container>
            <h1>Results</h1>
            <h3>Total letters: {this.props.runnerArr.length}</h3>
            <h3>Mistakes: {this.props.excerciseProgress.mistakes}</h3>
            <h3>Total time: {Number.parseFloat(this.props.excerciseProgress.timeInMinutes).toPrecision(2)}</h3>
            <h3>Speed: {Math.round(this.props.runnerArr.length/this.props.excerciseProgress.timeInMinutes)}</h3>
            <h3>Accuracy: {Math.round(((this.props.runnerArr.length-this.props.excerciseProgress.mistakes)/this.props.runnerArr.length)*100)}</h3>
          </Container>
        </Jumbotron>

        <Alert variant="warning"> Welcome! Are you ready to set your fingers on fire !!</Alert>
        <Accordion defaultActiveKey="0">
          {this.props.courseArr.map(e => { return (
          <Card key={id++}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                {e.group}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <CourseCard inProgressCourseId={this.props.excerciseProgress.courseId} courseArr={e.category} OnClickHandler={this.props.courseClickHandler}/>
              </Card.Body>
            </Accordion.Collapse>
          </Card> )})
        }
        </Accordion>
      </Container>
    )
  }
}

home.propTypes = {
  courseArr: PropTypes.array.isRequired,
  courseClickHandler: PropTypes.func.isRequired
}

export default home
