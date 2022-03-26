import {REGISTER_SUCCESS,REGISTER_FAIL,LOGIN_SUCCESS,LOGIN_FAIL,USER_LOADED,LOG_OUT,AUTH_ERROR} from '../actions/types'

const initialState= {
    
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    loading: true,
    error: null

}


export default  (state=initialState,action)=>{

        switch(action.type){
        
        case  USER_LOADED:
        return{
           ...state,
           isAuthenticated: true,
           loading: false,
           user : action.payload
           
           
        }
        case REGISTER_SUCCESS:
        case LOGIN_SUCESS:
        
        token: localStorage.setItem('token',action.payload.token);
        return{
        
         ...state,
         ...action.payload,
         isAuthenticated: true,
         loading: false
         
        }
        
        case  REGISTER_FAIL:
        case  LOGIN_FAIL :
        case  LOG_OUT :
        case  AUTH_ERROR:
        
        localStorage.removeItem('token')
        
        return{
            ...state,
           isAuthenticated: true,
           loading: false,
           user: null,
           error: action.payload
        }
        
        case CLEAR_ERRORS:
        return{
        ...state,
        error: null
        
        }
        
        default : 
        
        return state
        
        }


}
