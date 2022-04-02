         
         /* auth types */

 export  const REGISTER_SUCCESS= 'REGISTER_SUCCESS';
 export  const REGISTER_FAIL= 'REGISTER_FAIL';
 export  const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
 export  const LOGIN_FAIL= 'LOGIN_FAIL';
 export  const USER_LOADED= 'USER_LOADED';
 export  const AUTH_ERROR= 'AUTH_ERROR';
 export  const CLEAR_ERRORS = 'CLEAR_ERRORS'
 export  const LOG_OUT= 'LOG_OUT';
 export  const LOADING= 'LOADING';
 
  /* Alert types */
  
 export const  SET_ALERT = 'SET_ALERT';
 export const  REMOVE_ALERT= 'REMOVE_ALERT'; 
 
 /* profile types */
 
 export const GET_PROFILE= 'GET_PROFILE';
 export const UPDATE_PROFILE = 'UPDATE_PROFILE';
 export const PROFILE_ERROR = 'PROFILE_ERROR'
 
 /* Article Types */

export const POST_ARTICLE = 'POST_ARTICLE';
export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_ARTICLE = 'GET_ARTICLE';
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const ARTICLE_ERROR = 'ARTICLE-ERROR'
export const SET_CURRENT = 'SET_CURRENT';
export const CLEAR_CURRENT = 'CLEAR_CURRENT';

/* TYPES for COMMENT */

export const POST_COMMENT = 'POST_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const COMMENT_ERROR = 'COMMENT_ERROR'

/* TYPES for LIKE */

export const LIKE_ARTICLE = 'LIKE_ARTICLE';
export const UNLIKE_ARTICLE = 'UNLIKE_ARTICLE';
