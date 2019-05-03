import {
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
} from '../actions';

const initialState = {
    isLoggingIn: false,
    token: '',
    user: {},
    error: false
};

const loginUser = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_USER_START:
            return {
                ...state,
                isLoggingIn: true,
            }
        case LOGIN_USER_SUCCESS:
            localStorage.setItem('jwt', action.payload);
            console.log(action.payload)
            return {
                ...state,
                isLoggingIn: false,
                token: action.payload
            }
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                error: true
            }
        default:
            return state
    }
}

export default loginUser; 