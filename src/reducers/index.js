
import {combineReducers} from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import profileReducer from './profileReducer';
import articleReducer from './articleReducer';

  const combineReducer= combineReducers(

{
       auth : authReducer,
       alerts: alertReducer,
       articles:articleReducer,
       profile:profileReducer
       
}
)

export default combineReducer;
