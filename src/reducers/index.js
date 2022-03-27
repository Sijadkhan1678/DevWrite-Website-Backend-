
import {combineReducers} from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';

export const combineReducer= combineReducers(

{
       auth : authReducer,
       alerts: alertReducer
}
)
