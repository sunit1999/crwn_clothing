import UserActionTypes from './user-action-types';

const INITIAL_STATE = {
    currentUser: null,
    error: null
}
// state --> current state which is stored before the action took place
// action --> an object with type and payload which is similiar to name-value pair
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                error: null,
                currentUser: action.payload
            };
        
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                error: null,
                currentUser: null
            };
        
        case UserActionTypes.SIGN_UP_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_IN_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        
        default:
            return state;
    }
}

export default userReducer;