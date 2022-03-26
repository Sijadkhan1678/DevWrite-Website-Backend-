

import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'dev-tools-extention';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const  middleware = [thunk];

const initial_State= {};


const   store = createStore(rootReducer,
                initial_State,
               composeWithDevTools(applyMiddleware(...middleware))                 
);


export default store;
