
import {combineReducers} from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';

  const combineReducer= combineReducers(

{
       auth : authReducer,
       alerts: alertReducer
}
)

export default combineReducer;
