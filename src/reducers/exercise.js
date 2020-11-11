import {
  KEY_PRESSED, START_COURSE, START_TYPING, UPDATE_TIME_PASSED, SWITCH_BOUNDARY_MODE
} from '../constants/ActionTypes';


const initialState = {  progress: {courseId: 0,enteredChar: '',currentItemId : 0, mistakes : 0, status: "none"},
                        content: [{char:'h',id:0},{char:'e',id:1},{char:'l',id:2},{char:'l',id:3},{char:'o',id:4}],
                        time : 1,
                        words : 10,
                        timeMode: true,
                        missedKeys:[]
                      }
const runnerLimit = 100;

const getContentObj = (contentString, limit, currentId=0, contentConsumedIndex=0) => {
  //console.log("getContentObj", contentString, limit, currentId, contentConsumedIndex);
  let runnerContent = "";
  let contentArr = [];
  if(contentString.substring(contentConsumedIndex).length > limit){
    runnerContent += contentString.substring(contentConsumedIndex,contentConsumedIndex+limit);
    contentConsumedIndex = contentConsumedIndex + contentString.substring(contentConsumedIndex,contentConsumedIndex+limit).length;
   // console.log("getContentObj : inside If ", limit, runnerContent, runnerContent.length, contentConsumedIndex);
  }else {
    runnerContent += contentString.substring(contentConsumedIndex);
    contentConsumedIndex = 0;    
    while(runnerContent.length <= limit){
      //console.log("getContentObj : inside while of else  ", limit, runnerContent, runnerContent.length, contentConsumedIndex);
      if(contentString.substring(contentConsumedIndex).length >= limit-runnerContent.length){
        let endIndex = limit-runnerContent.length;
        runnerContent += contentString.substring(contentConsumedIndex,endIndex) + " ";
        contentConsumedIndex = contentConsumedIndex + contentString.substring(contentConsumedIndex,endIndex).length;
      }
      else {
        runnerContent += contentString.substring(contentConsumedIndex) + " ";
      }
    }
  }
  runnerContent = runnerContent.trim();
  let content = [...runnerContent];
  for(let i=0; i < content.length ; i++){
    contentArr.push({
      char: content[i],
      id: currentId++
    });                  
  }
  console.log("getContentObj Exit ", contentArr);
  let contentObj = {contentArr : contentArr, contentConsumedIndex: contentConsumedIndex};
  return contentObj;    
}                      

const exercise = (state = initialState, action) => {
  switch (action.type) {
    case START_COURSE:
      let updatedProgress = {...state.progress, courseId: action.course.id, timePassed:0, enteredChar: '', status: "start", dynamicCurrentItemId: 0, currentItemId : 0, contentConsumedIndex: 0, mistakes : 0}
      return {...state,progress: updatedProgress, contentString: action.course.contentString}
    case START_TYPING:
      let updatedProgressStartTyping = {...state.progress, timePassed: 0, status: "inprogress", startTime: Date.now(), enteredChar: '', dynamicCurrentItemId: 0, currentItemId : 0, mistakes : 0}
      let contentObj = getContentObj(state.contentString,runnerLimit);
      return {...state, progress: updatedProgressStartTyping, content : contentObj.contentArr,contentConsumedIndex: contentObj.contentConsumedIndex,  time : Number.parseInt(action.param.time), words:  Number.parseInt(action.param.words)}
    case KEY_PRESSED:
      if(state.progress.status !== "inprogress"){
        return {...state};
      }
      let progressUpdated;
      let nextItem = state.content.find( item => item.id === state.progress.currentItemId);
      let moveIndicator =  nextItem ? nextItem.char === String.fromCharCode(action.key) : false;
      let runnerCameToEnd = state.content.length-1 === state.progress.dynamicCurrentItemId && moveIndicator;
      let completed = state.progress.currentItemId+1 === state.words && !state.timeMode;
      console.log("add more", runnerCameToEnd, completed, !state.timeMode, state.progress.currentItemId < state.words ,
                              state.progress.currentItemId+1, state.words);
      if(runnerCameToEnd && state.timeMode && state.progress.timePassed < state.time*60){
        progressUpdated = {...state.progress, 
          enteredChar : action.key, 
          dynamicCurrentItemId: 0, 
          currentItemId: moveIndicator ? state.progress.currentItemId+1 : state.progress.currentItemId,
          mistakes: !moveIndicator ? state.progress.mistakes+1 : state.progress.mistakes,
          missedKeys: moveIndicator ? state.missedKeys : [].concat(state.missedKeys, String.fromCharCode(action.key))
        }
        let contentObj = getContentObj(state.contentString ,runnerLimit ,state.progress.currentItemId+1, state.contentConsumedIndex);
        return {...state,progress: progressUpdated, content : contentObj.contentArr,contentConsumedIndex: contentObj.contentConsumedIndex}
      }
      else if(runnerCameToEnd && !state.timeMode && state.progress.currentItemId+1 < state.words ){
        progressUpdated = {...state.progress, 
          enteredChar : action.key,
          dynamicCurrentItemId: 0, 
          currentItemId: moveIndicator ? state.progress.currentItemId+1 : state.progress.currentItemId,
          mistakes: !moveIndicator ? state.progress.mistakes+1 : state.progress.mistakes,
          missedKeys: moveIndicator ? state.missedKeys : [].concat(state.missedKeys, String.fromCharCode(action.key))
        }
        let contentObj = getContentObj(state.contentString ,state.words-(state.progress.currentItemId+1) > runnerLimit ? runnerLimit : state.words-(state.progress.currentItemId+1),state.progress.currentItemId+1, state.contentConsumedIndex);
        return {...state,progress: progressUpdated, content : contentObj.contentArr,contentConsumedIndex: contentObj.contentConsumedIndex}
      }else {
        let currentItemId = moveIndicator ? state.progress.currentItemId+1 : state.progress.currentItemId;
        let timeInMinutes = completed ? Math.round((Date.now()-state.progress.startTime)/60000) : 0;
        let mistakes = !moveIndicator ? state.progress.mistakes+1 : state.progress.mistakes;
        progressUpdated = {...state.progress, 
                                  enteredChar : action.key, 
                                  currentItemId: currentItemId,
                                  dynamicCurrentItemId: moveIndicator ? state.progress.dynamicCurrentItemId+1 : state.progress.dynamicCurrentItemId,
                                  mistakes: mistakes,
                                  missedKeys: moveIndicator ? state.missedKeys : [].concat(state.missedKeys, String.fromCharCode(action.key)),
                                  status: completed  ? "completed" : "inprogress",
                                  timeInMinutes : timeInMinutes,
                                  speed: timeInMinutes > 0 ? Math.round((currentItemId/5)/timeInMinutes) +' (wpm)': "No meaningful result. Type for longer than a minute",
                                  accuracy: Math.round((currentItemId/(currentItemId+mistakes))*100)
                                };
      }
      return {...state,progress: progressUpdated};
    case SWITCH_BOUNDARY_MODE:
      return {...state, timeMode: action.mode === "time"};
    case UPDATE_TIME_PASSED:
      let timePassed = state.progress.timePassed+1;
      console.log("timePassed ", timePassed, state.time*60)
      let completedTimePassed = timePassed >= state.time*60 && state.timeMode;
      let currentItemId = moveIndicator ? state.progress.currentItemId+1 : state.progress.currentItemId;
      let timeInMinutes = completedTimePassed ? Math.round((Date.now()-state.progress.startTime)/60000) : 0;
      const progressUpdatedTimePassed = {...state.progress, 
                                  status: completedTimePassed  ? "completed" : "inprogress",
                                  timeInMinutes : timeInMinutes,
                                  timePassed: timePassed,
                                  speed: timeInMinutes > 0 ? Math.round((currentItemId/5)/timeInMinutes) +' (wpm)': "No meaningful result. Type for longer than a minute",
                                  accuracy: Math.round((currentItemId/(currentItemId+state.progress.mistakes))*100)
                                };
      return {...state,progress: progressUpdatedTimePassed};
    default:
      return state;
  }
}

export default exercise