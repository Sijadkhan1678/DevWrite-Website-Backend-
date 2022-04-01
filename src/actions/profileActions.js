import {GET_PROFILE,UPDATE_PROFILE,
        LOADING,SET_CURRENT,CLEAR_CUREENT
}  from './types';
import axios from 'axios';

export const getUser = id => async dispatch => {

try {
  
  const res = await axios.get(`/api/profile/${id}`)
  
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })
  }

catch(err){
  console.log(err)
}

}

export const getProfile = () => async dispatch => {
  
  try{
    const res = await axios.get(`/api/profile/myprofile`);
    dispatch({
      type : GET_PROFILE,
      payload : res.data
    })
    setLoading
  }
  catch(err){
    dispatch({
      type :PROFILE_ERROR,
      payload: res.response.data.msg
    })
  }
}

export const updateProfile = profile => async dispatch => {
  
  const config = {
  headers : {
    
    'Content-Type': 'multipart/form-data'
  }
    
  }
  try {
    
  
  const res = await axios.post('/api/profile/myprofile',profile,config);
  
  dispatch({
    
    type: UPDATE_PROFILE,
    payload:res.data
    
  })
  }
  
  catch(err){
    
    console.log(err)
  }
}

export const setProfile = profile => {
    return {
      type: SET_CURRENT,
      payload: profile
    }
}

export const clearProfile = () => {
  return {
    type : CLEAR_CUREENT
  }
}

export const setLoading = () => {
  return {
    type : LOADING
  }
}
