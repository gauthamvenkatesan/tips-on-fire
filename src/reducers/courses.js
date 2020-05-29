import {
  INIT, INIT_SUCCESS, SHOW_ADD_EXCERCISE, ADD_CUSTOM_EXERCISE
} from '../constants/ActionTypes'

const initialState = {showAddExercise: false,customExcercise: {title: "", content: ""},courses: [{"group":"Warm up", "category":[
  {"id": 1, "title": "Home Row", "category": "practice"},
  {"id": 4, "title": "Home Row + numbers", "category": "practice"}
]}]};

const courses = (state = initialState, action) => {
  console.log("courseReducer", action, state);
  switch (action.type) {
    case INIT:
      return state;
    case INIT_SUCCESS:
      return {...state,courses:action.initData};
    case SHOW_ADD_EXCERCISE:
      return {...state, showAddExercise: action.show}
    case ADD_CUSTOM_EXERCISE:
      let courseCount = 0;
      let contentArr = [];
      let tempCourses = Array.from(state.courses);
      tempCourses.map(course => course.category.map( () => courseCount++));

      console.log("courseCOunt", courseCount);
      let content = [...action.course.content];

      console.log("content", content);
      for(let i=0; i < content.length ; i++){
        contentArr.push({
          char: content[i],
          id: i
        });
      };
      console.log("contentArr", contentArr);
      console.log("tempCourses",tempCourses);
      let customCourse = {id: `${courseCount+1}`, title: `${action.course.title}`, category: "custom", content: contentArr};
      let modifiedCourses = tempCourses.map(course => {
        if(course.group === "Custom Excercises") {
          console.log("1",course); course.category.push(customCourse); console.log("2",course); }
        return course;  
      })

      console.log("modifiedCourses", modifiedCourses);
      return {...state,courses: modifiedCourses};
    default:
      return state;
  }
}

export default courses
