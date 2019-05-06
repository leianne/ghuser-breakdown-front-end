import {
    USER_SEARCH
} from '../actions'

const initialState = {
    user: {}
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SEARCH:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}

export default searchReducer;