import {
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
} from '../actions';

const initialState = {
    isRegistering: true,
    token: '',
    error: false,
    user: {}
}

const registerReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_USER_START: 
            return {
                ...state,
                isRegistering: true
            }
        case REGISTER_USER_SUCCESS:
            localStorage.setItem('jwt', action.payload.token)
            window.location.href = '/search'
            return {
                ...state,
                isRegistering: false,
                token: action.payload.token,
                user: action.payload.newUser
            }
        default:
            return state
    }
}

export default registerReducer