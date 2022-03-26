import {REGISTER_SUCCESS,REGISTER_FAIL,LOGIN_SUCCESS,LOGIN_FAIL,USER_LOADED,AUTH_ERROR,LOG_OUT,CLEAR_ERRORS} from './types';
import setAuthToken from '../utils/setAuthToken';
import axios from 'axios'

export const Register = FormData = async dispatch => {
  try {
    const config = {
      
      headers : {
        'Content-Type': 'application/json'
      }
      
    }
      const res = await axios.post('/api/register',FormData,config);
      dispatch({
        type:REGISTER_SUCCESS,
        payload: res.data
        
      })
      
      loadUser()
      
    
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.msg
    })
  }
  
}


export const Login = FormData = async dispatch => {
  try {
    const config = {
      
      headers : {
        'Content-Type': 'application/json'
      }
      
    }
      const res = await axios.post('/api/auth',FormData,config);
      dispatch({
        type:LOGIN_SUCCESS,
        payload: res.data
        
      })

      loadUser()
    
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.msg
    })
  }
  
}

/* load user */
 export const loadUser =  () => async dispatch=> {
   
   if(localStorage.token){
    setAuthToken(localStorage.token)
   }
   try {
    
    const res = await axios.get('/api/auth')
    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
    
   } catch (err) {

     dispatch({
     type: AUTH_ERROR,
     payload: err.response.msg
   } )
   
   
   
 }
 
 export const logOut= () =>  {type: LOG_OUT}
   
 
 
  /* Clear Errors */
  
  export const clearErrors = () =>{
  
  return{
  
    type: CLEAR_ERRORS 
  
  }
   
  }
 

