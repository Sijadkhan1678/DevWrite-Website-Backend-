
import React,{useEffect} from "react";
import {getArticle} from '../../actions/articleActions';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem'

const Article = ({article,getArticle}) => {

const {_id, author,avatar,title,description,comments, match} = article

useEffect(()=>{

  getArticle(match.params._id);
  
},[])
  
    return (
      <div className='card-panel'>
      <Link > 
          <div className="col s12 m9 l10">
            <div className="card horizontal">
              <div class="card-image">
                <img src={author.photo} className="responsive-img round-img" />
              </div>
              <div class="card-stacked">
              <div class="card-content">
                  
            <h5>posted by {author.name}</h5>
              </div>
              </div>
             </div>
             </div>
             </Link>
    <h4 className='m-4'>{title}</h4>          
    <img src={avatar} className='responsive-img mt-3' />  <pre>
     <p>
      {description}
    </p>
    </pre>           
                  
    <CommentForm id={_id}/>
    comments.map(comment => <CommentItem key={comment._id} comment={comment} /> )
      </div>
    );
  
}
Article.propTypes= {
  article: propTypes.object.isRequired,
  getArticle: propTypes.func.isRequired
}
const mapStateToProps = state => ({
    article: state.article
  })
export default connect(mapStateToProps,{getArticle}) (Article)
