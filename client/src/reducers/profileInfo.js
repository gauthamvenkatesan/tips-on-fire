import { GET_PROFILE_REQUEST,GET_PROFILE_SUCCESS } from '../constants/ActionTypes';

const initialState = {KeysErrorPecentage_data: [{"x": "a","y":24.5}, {"x": "b","y":18.5},{"x": "c","y":34.5}, {"x": "d","y":18.5},{"x": "e","y":34.5}, {"x": "f","y":18.5},{"x": "g","y":34.5}, {"x": "h","y":18.5}]};
console.log("user");
console.log(JSON.stringify(initialState));
const profileInfo = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE_SUCCESS:
            JSON.parse(initialState);
            return {...state, KeysErrorPecentage_data: action.KeysErrorPecentage_data }

        default:
            return state;     
    }
}

export default profileInfo;