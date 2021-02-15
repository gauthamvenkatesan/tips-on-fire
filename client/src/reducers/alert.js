import { SHOW_ALERT, HIDE_ALERT } from "../constants/ActionTypes";

const initialState = { show: false, message: "" , variant: "warning"}

const alert = (state = initialState, action) => {
    switch (action.type) {
        case  SHOW_ALERT:
            return {...state, show: true, message: action.message ? action.message: "Default Error Message" , variant : "danger" }
        case HIDE_ALERT:
            return initialState    
        default :
            return state
    }
}

export default alert