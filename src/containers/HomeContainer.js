import { connect } from 'react-redux'
import Home from '../components/home'
import {initApp, keyPressedEvent, startCourse, startTyping, showAddExcercise, addCustomExcercise} from '../actions/action'

const mapStateToProps = (state, ownProps) => ({
  courseArr: state.courses.courses,
  runnerArr: state.exercise.content,
  excerciseProgress: state.exercise.progress,
  showAddExercise: state.courses.showAddExercise,
  customExcercise: state.courses.customExcercise
})


const registerforKeyPress = (dispatch) => {
  console.log("registerforKeyPress");
  document.addEventListener("keypress", e => {
    console.log("onkeypress",e.charCode);
    dispatch(keyPressedEvent(e.charCode));
    e.preventDefault();
  })
};

const courseClickHandler = (dispatch, course) => {
  course.title === "Add Custom Excercise" ? 
    dispatch(showAddExcercise(true)) :
    dispatch(startCourse(course))
}

const mapDispatchToProps = dispatch => ({
  initApp : message => {
    dispatch(initApp(dispatch))
    registerforKeyPress(dispatch)
  },
  courseClickHandler: (course) => courseClickHandler(dispatch, course),
  startPracticeHandler: () => dispatch(startTyping()),
  onAddExcerciseSubmit: course => {
    dispatch(showAddExcercise(false));
    dispatch(addCustomExcercise(course));
  },
  onAddExcerciseClose: () => dispatch(showAddExcercise(false))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
