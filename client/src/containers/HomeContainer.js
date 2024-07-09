import { connect } from 'react-redux'
import Home from '../components/home'
import {initApp, keyPressedEvent, startCourse, startTyping, showAddExcercise, addCustomExcercise, updateTimePassed, switchMode, resumeSession} from '../actions/action'


var keypressHandlerFunc ;
const mapStateToProps = (state, ownProps) => ({
  courseArr: state.courses.courses,
  coursesLoaded: state.courses.coursesLoaded,
  runnerArr: state.exercise.content,
  excerciseProgress: state.exercise.progress,
  showAddExercise: state.courses.showAddExercise,
  customExcercise: state.courses.customExcercise,
  timeMode: state.exercise.timeMode,
  time: state.exercise.time,
  words: state.exercise.words,
  username: state.session.username
})


function keypressHandler(e){
    this(keyPressedEvent(e.charCode));
    e.preventDefault();
};

const registerforKeyPress = (dispatch) => {
  console.log("addEventListenerVariableResult");
  keypressHandlerFunc = keypressHandler.bind(dispatch);
  document.addEventListener("keypress", keypressHandlerFunc,true)
};

const deRegisterforKeyPress = (dispatch) => {
  let removeEventListenerVariableResult = document.removeEventListener("keypress", keypressHandlerFunc, true);
  console.log("removeEventListenerVariableResult", removeEventListenerVariableResult);
}

var timer;
const updateTime = (dispatch,time) => {
  timer = setInterval(dispatch => {dispatch(updateTimePassed())}, 1000, dispatch, time);
} 

const courseClickHandler = (dispatch, course) => {
  course.title === "Add Custom Excercise" ? 
    dispatch(showAddExcercise(true)) :
    dispatch(startCourse(course))
}

const mapDispatchToProps = dispatch => ({
  initApp : message => initApp(dispatch),
  courseClickHandler: (course) => courseClickHandler(dispatch, course),
  startExcercise: (startParam) => {
    if(startParam.timeMode) 
      updateTime(dispatch, startParam.time);
    registerforKeyPress(dispatch)  
    dispatch(startTyping(startParam))
  },
  onAddExcerciseSubmit: course => {
    dispatch(showAddExcercise(false));
    dispatch(addCustomExcercise(course));
  },
  onAddExcerciseClose: () => dispatch(showAddExcercise(false)),
  stopExcercise:() => {
    clearInterval(timer);
    deRegisterforKeyPress(dispatch)  
  },
  switchBoundaryMode :(mode) => dispatch(switchMode(mode))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
