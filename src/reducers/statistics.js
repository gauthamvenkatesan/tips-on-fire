import {KEY_PRESS} from  '../actions/action'

const initialState = {daysPractised:[], keyStats:[{code:"111"},{char:"a"},{missed:0},{gradeInPercentage:100}]}
const statistics = (state = initialState, action) => {
    switch (action.type){
        case KEY_PRESS:
            console.log("Inside statistics keyPress");
            return {...state}
        default:
            return state;     
    }
}

export default statistics;