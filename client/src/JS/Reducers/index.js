import {combineReducers} from 'redux' ; 
import userReducer from './user';
import taskReducer from './task';




const rootReducer = combineReducers({userReducer, taskReducer})


export default rootReducer ;
