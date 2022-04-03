import React,{useEffect} from 'react';
import ArticleItem from './ArticleItem';
import {like,unlike} from '../../actions/article';
import {Redirect,Link} from 'react-router-dom';
import {connect} from 'react-redux';
import propTypes from 'prop-types';

const ArticleItem = ({article,auth,like,unlike}) =>{

const {_id,title,avatar,likes,comments} = article
const {isAuthenticated,user} = auth;
const isLike = user => {
  if(isAuthenticated ){
    likes.includes(user._id) === true  ? like(user._id) : unlike(user._id)
    
  }else {
    <Redirect to='/register' />
  }
}

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
  <button onClick={isLike(user)} >  
  <i className={'material-icons'+
 ( likes.includes(user._id)===true ? 'red-text':'black-text' )}>favorite </i>  </button> {''}
  <span><i className='material-icons ml-3'>comment</i>{comments.length }</span>
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
  unlike: propTypes.object.isRequired
  

}

const mapStateToProps = state => ({
  
  auth: state.auth
})


export default connect(mapStateToProps,{like,unlike})(ArticleItem);
