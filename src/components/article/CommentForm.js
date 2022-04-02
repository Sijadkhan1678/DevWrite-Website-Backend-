import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { comment } from '../../actions/articleActions';
import  {setAlert} from '../../actions/alertActions'
import {Redirect} from 'react-router-dom'
  
  


const CommentForm = ({comment,auth:{isAuthenticated} }) => {
  
    const [comment, setComment] = useState('');
    const onSubmit = () => {
      if(comment ==='' ){
    setAlert('comment should not be empty','danger')
  }else{
    isAuthenticated ? comment(comment) : <Redirect to='/register'/>
  }

}

    return (
      <div className='row'>
    
      <div className='col s6 m6 l6'>
      <textarea
                name='comment'
                cols='30'
                rows='5'
                placeholder='Write something here'
                value={comment}
                onChange={e => setComment(e.target.value)}
                required
              />
      </div>
      <div className='col s3 m4'>
 <button onClick={onSubmit}>   <i   class="material-icons purple-text accent-4">
      send
      </i> </button>
      </div>
  
      </div>
      )
  
}
const mapStateProps = state => ({
  auth: state.auth
})

CommentForm.propTypes = {
  comment: PropTypes.func.isRequired
};

export default connect(
  mapStateProps,
  { comment }
)(CommentForm);
