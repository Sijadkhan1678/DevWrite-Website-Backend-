
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { unComment } from '../../actions/articleActions';



const CommentItem = ({comment,unComment})  => {
  const {_id,text,commentby,commentAt} = comment
  return(
    <Fragment>
         <Link > 
              <div className="col s12 m9 l10">
                <div className="card horizontal">
                  <div class="card-image">
                    <img src={commentby.photo} className="responsive-img round-img" />
                    <span className='block'> {commentby.name} </span>
                  </div>
                  
                  <div class="card-content">
                      
                <p>posted by {text}</p>
                  </div>
                  
                 </div>
                 </div>
                 </Link>
    </Fragment>
    )
  
}

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  unComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  
});


export default connect(mapStateToProps, { unComment })(CommentItem);
