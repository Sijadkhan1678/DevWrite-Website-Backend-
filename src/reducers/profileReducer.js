import {GET_PROFILE,UPDATE_PROFILE,SET_CURRENT,CLEAR_CURRENT} 
 from '../actions/profile';

const intialState = {
    Profile: null,
    ProfileArticle : null,
    error : null,
    current_profile : null
}

export default (state=intialState,action) => {
    switch (action.type) {
      
        
        case GET_PROFILE:
        return {
       ...state,
       Profile: action.payload.profile,
       ProfileArticle: action.paylod.articles
            
        }
        
        
        case UPDATE_PROFILE:
            return {
          ...state,
          profile : [...profile,action.payload]
          
            }
            
        case SET_CURRENT:
            return {
            ...state,  
            current_profile: action.payload
            }
            
        case CLEAR_CURRENT:
          return {
            ...state,
            current_profile: null
          }
          
        
        default:
            state
    }
}
