import userReducer from './authReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    userReducer
})

export default rootReducer;