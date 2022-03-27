
import {combineReducers} from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer'

export const combineReducer= combineRducers(

{
       auth : authReducer,
       alerts: alertReducer
}
)
