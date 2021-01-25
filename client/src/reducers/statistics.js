import { KEY_PRESSED } from '../constants/ActionTypes';

const initialState = {daysPractised:[], keyStats:{}}
const intialKeyStat = {char:"a",missed:0,gradeInPercentage:100}
const statistics = (state = initialState, action) => {
    switch (action.type) {
        case KEY_PRESSED:
            let stats = {...state.keyStats};
            let keyStat = stats[action.key] !== {} ? intialKeyStat : stats[action.key];
            keyStat.char =  String.fromCharCode(action.key);
            console.log("Inside statistics keyPress", action, state, keyStat);
            return {...state, keyStats: stats}
        default:
            return state;     
    }
}

export default statistics;