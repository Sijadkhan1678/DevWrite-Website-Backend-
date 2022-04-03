import React,{useEffect,Fragment} from 'react';
import {like,unlike,setCurrent} from '../../actions/articleActions';
import {Redirect,Link} from 'react-router-dom';
import {connect} from 'react-redux';
import propTypes from 'prop-types';

const ArticleItem = ({article,auth,like,unlike,setCurrent}) =>{

const {_id,title,avatar,likes,comments,author} = article
const {isAuthenticated,user} = auth;
const isLike = user => {
  if(isAuthenticated ){
    likes.includes(user._id) !== true  ? like(user._id) : unlike(user._id)
    
  }else {
    <Redirect to='/register' />
  }
}

const onUpdate = article  => {
    
      setCurrent(article);
      <Redirect to='/articles/article/articleform' />
      
}

 const guestAction = (
     <Fragment>
      <button onClick={isLike(user)} >  
     <i className={'material-icons'+
    ( likes.includes(user._id)===true ? 'red-text':'black-text' )}>favorite </i>  </button> { '' }
   <span><i className='material-icons'>comment</i>{comments.length }</span>
   </Fragment>
   
   )
   
  const authAction = (
    <Fragment>
       <button onClick={onUpdate(article)} >  
      Update  </button> { ' ' }
  <button onClick={deleteArticle(_id)}> 
  <i className={'material-icons tomato-text'}>delete </i>
  </button>
    
    </Fragment>
    ) 
   
   return (
   
  <div className='card-panel'>
       
  <div class="row">
  <div class="col s9 m4">
     
    <div class="card">
    <Link to={`/articles/article/${_id}`}>
      <div className='card-image'>
        <img src={avatar}/>
        
      </div>
      <div class="card-content">
      
     <p>{title}</p>
     
      </div>
    </Link>
      <div class="card-action">
  {isAuthenticated && author._id ==user._id ? authAction: guestAction}
      </div>
    </div>
  </div>

    
  </div>
       
       </div>
       
      
   
   )


}

ArticleItem.propTypes = {
  
  auth: propTypes.object.isRequired,
  article: propTypes.object.isRequired,
  like: propTypes.object.isRequired,
  unlike: propTypes.object.isRequired,
  setCurrent: propTypes.func.isRequired,
  deleteArticle: propTypes.func.isRequired

}

const mapStateToProps = state => ({
   
  auth: state.auth
})


export default connect(mapStateToProps,{like,unlike,setCurrent,deleteArticle})(ArticleItem);
