import { createSlice } from '@reduxjs/toolkit'

export const alert = createSlice({
    name: 'alert',
    initialState: { show: false, message: "" , variant: "warning"},
    reducers: {
        SHOW_ALERT: (state, action) => {
        state = { show: true, message: action.message ? action.message: "Default Error Message" , variant : action.variant }
        },
        HIDE_ALERT: (state) => {
            state = initialState
        }   
    },
  })

export const {  SHOW_ALERT, HIDE_ALERT } = alert.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectAlertVisiblity = (state) => state.show

export default alert.reducer
