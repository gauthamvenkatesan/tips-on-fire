import { createSlice } from '@reduxjs/toolkit'

export const course = createSlice({
    name: 'alert',
    initialState: {coursesLoaded:false, showAddExercise: false,customExcercise: {title: "", content: ""},courses: [{"group":"Warm up", "category":[
      {"id": 1, "title": "Home Row", "category": "practice"},
      {"id": 4, "title": "Home Row + numbers", "category": "practice"}
    ]}]},
    reducers: {
      INIT_SUCCESS: (state, action) => {
        state.courses = action.initData
        state.coursesLoaded =true
      },
      SHOW_ADD_EXCERCISE: (state) => {        
        state.showAddExercise = true

      },ADD_CUSTOM_EXERCISE : (state, action) => {
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
        state.courses = modifiedCourses
      }
    },
  })

export const {  INIT_SUCCESS, SHOW_ADD_EXCERCISE, ADD_CUSTOM_EXERCISE} = course.actions
export default course.reducer
