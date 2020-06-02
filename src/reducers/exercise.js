import {
  INIT, INIT_SUCCESS , KEY_PRESSED, START_COURSE, START_TYPING, UPDATE_TIME_PASSED, SWITCH_BOUNDARY_MODE
} from '../constants/ActionTypes';
import {getCoursebyId} from './reducers'


const initialState = {  progress: {courseId: 0,enteredChar: '',currentItemId : 0, mistakes : 0, status: "none"},
                        content: [{char:'h',id:0},{char:'e',id:1},{char:'l',id:2},{char:'l',id:3},{char:'o',id:4}],
                        time : 1,
                        words : 10,
                        timeMode: true
                      }
const runnerLimit = 50;



const getContentObjArray = (contentString, limit, currentId=0) => {
  console.log("getContentObjArray", contentString, limit, currentId);
  let filledContent = "";
  let contentArr = [];
  while(filledContent.length <= limit) {
    filledContent += contentString + " ";
  } filledContent = filledContent.substring(0,limit).trim();
  let content = [...filledContent];
  for(let i=0; i < content.length ; i++){
    contentArr.push({
      char: content[i],
      id: currentId++
    });                  
  }
  console.log("getContentObjArray Exit ", contentArr);
  return contentArr;    
}                      

const exercise = (state = initialState, action) => {
  switch (action.type) {
    case START_COURSE:
      let updatedProgress = {...state.progress, courseId: action.course.id, timePassed:0, enteredChar: '', status: "start", dynamicCurrentItemId: 0, currentItemId : 0, mistakes : 0}
      return {...state,progress: updatedProgress, contentString: action.course.contentString}
    case START_TYPING:
      let updatedProgressStartTyping = {...state.progress, timePassed: 0, status: "inprogress", startTime: Date.now(), enteredChar: '', dynamicCurrentItemId: 0, currentItemId : 0, mistakes : 0}
      return {...state, progress: updatedProgressStartTyping, content : getContentObjArray(state.contentString,runnerLimit), time : Number.parseInt(action.param.time), words:  Number.parseInt(action.param.words)}
    case KEY_PRESSED:
      if(state.progress.status !== "inprogress"){
        return {...state};
      }
      let progressUpdated;
      let nextItem = state.content.find( item => item.id === state.progress.currentItemId);
      let moveIndicator =  nextItem ? nextItem.char === String.fromCharCode(action.key) : false;
      let runnerCameToEnd = state.content.length-1 === state.progress.dynamicCurrentItemId && moveIndicator;
      let completed = state.progress.currentItemId+1 === state.words;
      console.log("add more", runnerCameToEnd, completed, !state.timeMode, state.progress.currentItemId < state.words ,
                              state.progress.currentItemId+1, state.words);
      if(runnerCameToEnd && state.timeMode && state.progress.timePassed < state.time*60){
        progressUpdated = {...state.progress, 
          enteredChar : action.key, 
          dynamicCurrentItemId: 0, 
          currentItemId: moveIndicator ? state.progress.currentItemId+1 : state.progress.currentItemId,
          mistakes: !moveIndicator ? state.progress.mistakes+1 : state.progress.mistakes
        }
        return {...state,progress: progressUpdated, content: getContentObjArray(state.contentString ,runnerLimit ,state.progress.currentItemId+1)}
      }
      else if(runnerCameToEnd && !state.timeMode && state.progress.currentItemId+1 < state.words ){
        progressUpdated = {...state.progress, 
          enteredChar : action.key,
          dynamicCurrentItemId: 0, 
          currentItemId: moveIndicator ? state.progress.currentItemId+1 : state.progress.currentItemId,
          mistakes: !moveIndicator ? state.progress.mistakes+1 : state.progress.mistakes
        }
        return {...state,progress: progressUpdated, content: getContentObjArray(state.contentString ,state.words-(state.progress.currentItemId+1) > runnerLimit ? runnerLimit : state.words-(state.progress.currentItemId+1),state.progress.currentItemId+1)}
      }else {
        progressUpdated = {...state.progress, 
                                  enteredChar : action.key, 
                                  currentItemId: moveIndicator ? state.progress.currentItemId+1 : state.progress.currentItemId,
                                  dynamicCurrentItemId: moveIndicator ? state.progress.dynamicCurrentItemId+1 : state.progress.dynamicCurrentItemId,
                                  mistakes: !moveIndicator ? state.progress.mistakes+1 : state.progress.mistakes,
                                  status: completed  ? "completed" : "inprogress",
                                  timeInMinutes : completed ? Math.round((Date.now()-state.progress.startTime)/1000)/60 : ""
                                };
      }
      return {...state,progress: progressUpdated};
    case SWITCH_BOUNDARY_MODE:
      return {...state, timeMode: action.mode === "time"};
    case UPDATE_TIME_PASSED:
      let timePassed = state.progress.timePassed+1;
      let completedTimePassed = timePassed >= state.time*60 && state.timeMode;
      const progressUpdatedTimePassed = {...state.progress, 
                                  status: completedTimePassed  ? "completed" : "inprogress",
                                  timeInMinutes : completedTimePassed ? Math.round((Date.now()-state.progress.startTime)/1000)/60 : "",
                                  timePassed: timePassed
                                };
      return {...state,progress: progressUpdatedTimePassed};
    default:
      return state;
  }
}

export default exercise