import { combineReducers } from 'redux';
import loginReducer  from './loginReducer';
import registerReducer from './registerReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    search: searchReducer
});

console.log()
export default rootReducer;