import {GET_PROFILE,UPDATE_PROFILE,SET_CURRENT,CLEAR_CURRENT} 
 from '../actions/types';

const initialState = {
    profile: null,
    profileArticles : null,
    error : null,
    currentProfile : null
}

export default (state=initialState,action) => {
    switch (action.type) {
      
        
        case GET_PROFILE:
        return {
       ...state,
       profile: action.payload.profile,
       profileArticle: action.paylod.articles
            
        }
        
        
        case UPDATE_PROFILE:
            return {
          ...state,
          profile : action.payload
          
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
         return   state
    }
}
