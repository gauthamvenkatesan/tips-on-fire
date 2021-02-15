import {
  INIT, INIT_SUCCESS, SHOW_ADD_EXCERCISE, ADD_CUSTOM_EXERCISE
} from '../constants/ActionTypes'

const initialState = {coursesLoaded:false, showAddExercise: false,customExcercise: {title: "", content: ""},courses: [{"group":"Warm up", "category":[
  {"id": 1, "title": "Home Row", "category": "practice"},
  {"id": 4, "title": "Home Row + numbers", "category": "practice"}
]}]};

const courses = (state = initialState, action) => {
  switch (action.type) {
    case INIT:
      return state;
    case INIT_SUCCESS:
      return {...state,courses:action.initData,coursesLoaded:true};
    case SHOW_ADD_EXCERCISE:
      return {...state, showAddExercise: action.show}
    case ADD_CUSTOM_EXERCISE:
      let courseCount = 1;
      let tempCourses = Array.from(state.courses);
      tempCourses.map(course => course.category.map( () => courseCount++));
      let customCourse = {id: courseCount+1, title: `${action.course.title}`, category: "custom", contentString: action.course.content};
      let modifiedCourses = tempCourses.map(course => {
        if(course.id === 3) {
           course.category.push(customCourse);
        }
        return course;  
      })

      return {...state,courses: modifiedCourses};
    default:
      return state;
  }
}

export default courses
