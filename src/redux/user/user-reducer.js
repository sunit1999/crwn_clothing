import UserActionTypes from './user-action-types';

const INITIAL_STATE = {
    currentUser: null
}
// state --> current state which is stored before the action took place
// action --> an object with type and payload which is similiar to name-value pair
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;