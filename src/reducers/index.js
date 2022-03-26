
import {combineReducers} from 'redux';
import logReducer from './logReducer';

export const combineReducer= combineRducers(

{
       log : logReducer
}
)
