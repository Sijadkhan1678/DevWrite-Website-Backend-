import { GET_ARTICLES,GET_ARTICLE,
         POST_ARTICLE,UPDATE_ARTICLE,
         DELETE_ARTICLE,POST_COMMENT,
         DELETE_COMMENT,LIKE_ARTICLE,
         UNLIKE_ARTICLE,COMMENT_ERROR,
         SET_CURRENT,CLEAR_CURRENT,
         LOADING, ARTICLE_ERROR
         
} from './types';

import axios from 'axios'

export const  getArticles = () => async  dispatch => {
  
     try {
       const res = await axios.get('/api/articles');
       
       dispatch({
         type : GET_ARTICLES,
         payload : res.data
       })
       
       setLoading()
     }
     
     catch(err){
       
       dispatch({
         type : ARTICLE_ERROR,
         payload: err.response.data.msg
       })
       
     }
     
  
}

export const getArticle = (id) => async dispatch => {
      
      try {
        
       const res = await axios.get(`/api/articles/${id}`)
       
       dispatch({
         type : GET_ARTICLE,
         payload : res.data
         
       })
       
       setLoading()
       
      }
      catch(err){
        dispatch({
          type : ARTICLE_ERROR,
          payload : err.response.data.msg
          
        })
      }
      }





export const postArticle = article => async dispatch => {
  
    try {
      const config = {
        headers : {
          'Content-Type' : 'multipart/form-data'
        }
        }
      
      const res = await axios.post('/api/articles',article,config)
      
      dispatch({
        type: POST_ARTICLE,
        payload : res.data
      })
      
    }
    catch(err) {
      dispatch( {
      type: ARTICLE_ERROR,
      payload : err.response.data.msg
      })
    }
    
    }



export const updateArticle = (article,id) => async dispatch => {
  
  try {
    
         const config = {
           headers : {
             'Content-Type' : 'multipart/form-data'
           }
         }
         
    const res = await axios.put(`/api/articles/article/${id}`,article,config)
         
    dispatch({
      type: UPDATE_ARTICLE,
      payload:res.data
    })     
  }
    
     catch (err) {
       dispatch({
         type: ARTICLE_ERROR,
         payload: err.response.data.msg
       })
     
    
  }
}
export const setCurrent= article => {
  return {
    type : SET_CURRENT,
    payload: article
  }
}

export const clearCurrent = () => {
  return {
    type : CLEAR_CURRENT
  }
}

export const deleteArticle = id => async dispatch => {

  try {

    

    await axios.delete(`/api/articles/article/${id}`)

    dispatch({
      type: DELETE_ARTICLE,
      payload: id
    })
  }

  catch (err) {
    
    console.log(err)


  }
}


export const comment = (comment,id) => async dispatch => {

 const  config = {
   headers : {
     'Content-Type' : 'application/json'
   }
 }
 try {
   const res = await axios.post(`/api/articles/comment/${id}`,comment,config);
   
   dispatch({
     type : POST_COMMENT,
     payload : res.data
   })
 }
 catch(err){
   dispatch({
     type : COMMENT_ERROR,
     payload: err.response.data.msg
   })
 }

}


export const unComment = (id,articleId) => async dispatch => {


 try {
   
    await axios.delete(`/api/articles/uncomment/${id}`,articleId);
   
   dispatch({
     type : DELETE_COMMENT,
     payload : id
   })
 }
 catch(err){
   dispatch({
     type : COMMENT_ERROR,
     payload: err.response.data.msg
   })
 }

}


export const like = id => async dispatch => {

 try {
  const res = await axios.post(`/api/articles/like/${id}`)
  
  dispatch({
    
    type: LIKE_ARTICLE,
    payload: res.data
    
  })
 }
 catch(err){
   
   dispatch({
     type: ARTICLE_ERROR,
     payload: err.response.data.msg
   })
 }

}


export const unLike = id => async dispatch => {

  try {
   const res = await axios.post(`/api/articles/unlike/${id}`)

    dispatch({
      
      type: UNLIKE_ARTICLE,
      payload: res.data
      
    })
  }
  catch (err) {

    dispatch({
      
      type: ARTICLE_ERROR,
      payload: err.response.data.msg
      
    })
  }

}


const setLoading = () => {
  return {
    type: LOADING
  }
}
