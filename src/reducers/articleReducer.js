import {  GET_ARTICLES, GET_ARTICLE,
          POST_ARTICLE, UPDATE_ARTICLE,
          DELETE_ARTICLE, POST_COMMENT,
          DELETE_COMMENT, LIKE_ARTICLE,
          UNLIKE_ARTICLE, COMMENT_ERROR,
          LOADING, SET_CURRENT,CLEAR_CURRENT

} from '../actions/articleActions';

const initialState = {
     articles: null,
     article : null,
     current : null,
     error: null,
     loading : false
}

export default  (state=initialState,action) =>{
  switch(action.type){
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        loading: false
      }
    case GET_ARTICLE:
        return{
          ...state,
          article : action.payload,
          loading : false
        }
    case POST_ARTICLE:
      return {
        ...state,
        articles: [...state.articles,action.payload],
        loading: false
      }
    case UPDATE_ARTICLE:
        return {
          ...state,
          articles : state.articles.map(article=> article._id === action.payload.id ? action.payload : article ),
          loading: false
        }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
        loading : false
        
      }
    case CLEAR_CURRENT:
      return {
        current : null
      }
      
    case DELETE_ARTICLE:
        return {
          ...state,
          articles: state.articles.filter(article => article._id !== action.payload)
        }
    case POST_COMMENT:
          return {
            ...state,
            article: action.payload
            
          }
    case DELETE_COMMENT:
          return {
            ...state,
            article : {...state.post,comments:state.article.comments.map(Comment=> comment.id !== action.payload )
            }
          }
          
    
    case LIKE_ARTICLE:
          return{
            ...state,
            article: action.payload
          }
    case UNLIKE_ARTICLE:
          return {
           ...state,
           article : {...state.article,likes: state.article.likes.map(like=> like.id !== action.payload)}
          }
    case LOADING:
      return {
        ...state,
        loading : true
      }
          
    default : 
  return  state
    
  }
}