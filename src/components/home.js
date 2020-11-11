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
    this.props.initApp();
  }

  render(){
    let id =0;
    let time = this.props.time;
    let words = this.props.words;
    let timeMode = this.props.timeMode;
    if (this.props.excerciseProgress.status === "completed") this.props.stopExcercise();
    return (
      <Container className="p-5">
        <AddExcercise show={this.props.showAddExercise} onHide={this.props.onAddExcerciseClose} onAddExcerciseSubmit={this.props.onAddExcerciseSubmit} customexcercise={this.props.customExcercise}></AddExcercise>
        <Jumbotron id="runner" tabIndex="1"   className={`no-outline ${this.props.excerciseProgress.status === "inprogress" ? "" : "d-none"} whiteboard`}>
          <Container>
            <div className="runnerContainer">
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
        <Jumbotron id="boundary" className={`${this.props.excerciseProgress.status === "start" ? "" : "d-none"} whiteboard`}>
          <Container>
            <Form>
              <Form.Group controlId="time" onMouseUp={(e) => this.props.switchBoundaryMode(e.target.id)}  as={Row} >
                <Form.Label column lg={2} >Time (minutes)</Form.Label>
                <Col lg={2}>
                  <Form.Control  disabled={!this.props.timeMode} as="select" onChange={(e) => time = e.target.value} defaultValue={this.props.time} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </Form.Control>
                </Col>
                </Form.Group>
                <Form.Group  controlId="words" onMouseUp={(e) => this.props.switchBoundaryMode(e.target.id)}  as={Row}>
                  <Form.Label column lg={2}>Key Strokes</Form.Label>
                  <Col lg={2}>
                    <Form.Control  onChange={(e) => words = e.target.value} disabled={this.props.timeMode} as="select" defaultValue={this.props.time}>
                      <option>10</option>
                      <option>21</option>
                      <option>70</option>
                      <option>500</option>
                      <option>1000</option>
                    </Form.Control>
                  </Col>
              </Form.Group>
              <Button onClick={() => this.props.startExcercise({time, words, timeMode})} >Start Practice</Button>
            </Form>
          </Container>
        </Jumbotron>

        <Jumbotron id="results" className={`${this.props.excerciseProgress.status === "completed" ? "" : "d-none"} whiteboard`}>
          <Container>
            <h1>Results</h1>
            <h3>Total characters: {this.props.excerciseProgress.currentItemId+this.props.excerciseProgress.mistakes}</h3>
            <h3>Mistakes: {this.props.excerciseProgress.mistakes}</h3>
            <h3>Total time: {this.props.excerciseProgress.timeInMinutes} {this.props.excerciseProgress.timeInMinutes > 1 ? '(Minutes)' : '(Minute)'} </h3>
            <h3>Speed: {this.props.excerciseProgress.speed}</h3>
            <h3>Accuracy: {this.props.excerciseProgress.accuracy}%</h3>
            <Button onClick={() => this.props.startExcercise({time, words, timeMode})}>Restart</Button>
          </Container>
        </Jumbotron>

        <Alert variant="warning"> Welcome! Are you ready to set your fingers on fire !!</Alert>
        {/*<h6>Exercise Progress: {JSON.stringify(this.props.excerciseProgress)}</h6>*/}
        <Accordion defaultActiveKey="0">
          {this.props.courseArr.map(e => { let eventKey= id++; return (
            <Card key={id++}>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={eventKey.toString()}>
                  {e.group}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={eventKey.toString()}>
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
