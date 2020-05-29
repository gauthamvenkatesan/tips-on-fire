import {
  INIT, INIT_SUCCESS , KEY_PRESSED, START_COURSE, START_TYPING
} from '../constants/ActionTypes'

const initialState = { progress:{timeMode: true, enteredChar: '',currentItemId : 0, mistakes : 0, status: "none", courseId: ""},content: [{char:'h',id:0},{char:'e',id:1},{char:'l',id:2},{char:'l',id:3},{char:'o',id:4}]};

const exercise = (state = initialState, action) => {
  switch (action.type) {
    case START_COURSE:
      let updatedProgress = {...state.progress, enteredChar: '', status: "start",currentItemId : 0,mistakes : 0, courseId: action.course.id}
      return {...state,progress: updatedProgress, content: action.course.content}
    case START_TYPING:
      let updatedProgressStartTyping = {...state.progress, status: "inprogress", startTime: Date.now() }
      return {...state,progress: updatedProgressStartTyping}
    case KEY_PRESSED:
      if(state.progress.status !== "inprogress"){
        return {...state};
      }
      let nextItem = state.content.find( item => item.id === state.progress.currentItemId);
      let moveIndicator =  nextItem ? nextItem.char === String.fromCharCode(action.key) : false;
      let completed = state.content.length-1 === state.progress.currentItemId;
      console.log("KEy PRESSED", state.content.length, state.progress.currentItemId);
      const progressUpdated = {...state.progress, 
                                  enteredChar : action.key, 
                                  currentItemId: moveIndicator ? state.progress.currentItemId+1 : state.progress.currentItemId,
                                  mistakes: !moveIndicator ? state.progress.mistakes+1 : state.progress.mistakes,
                                  status: completed  ? "completed" : "inprogress",
                                  timeInMinutes : completed ? Math.round((Date.now()-state.progress.startTime)/1000)/60 : "",
                                  courseId: completed ? "" : state.progress.courseId
                                };
      return {...state,progress: progressUpdated};
    default:
      return state;
  }
}

export default exercise