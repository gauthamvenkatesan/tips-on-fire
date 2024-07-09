import { createSlice } from '@reduxjs/toolkit'
const intialKeyStat = {char:"a",missed:0,gradeInPercentage:100}
export const statistics = createSlice({
    name: 'statistics',
    initialState: {daysPractised:[], keyStats:{}},
    reducers: {
        KEY_PRESSED: (state, action) => {
            let stats = {...state.keyStats};
            let keyStat = isNaN(stats[action.key]) ? intialKeyStat : stats[action.key];
            keyStat.char =  String.fromCharCode(action.key);
            console.log("Inside statistics keyPress", action, state, keyStat);
            state.keyStats = stats;
        }        
    },
  })

export const {  KEY_PRESSED } = statistics.actions

export default statistics.reducer
