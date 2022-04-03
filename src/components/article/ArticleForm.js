import React,{useState,useEffect} from 'react'
import propTypes from 'prop-types'
import {connect} from 'react-redux'
import {updateArticle,postArticle} from '../../actions/articleActions';



 const ArticleForm = ({current,history,postArticle,updateArticle}) => {
   
   useEffect(()=>{
     if(current !== null){
       setArticle(current)
     }else{
       setArticle({
         avatar: '',
         title: '',
         description: '',
         catagory: ''
        } )
     }
   },[current])
  const [article,setArticle] = useState({

    avatar: '',
    title: '',
    description:'',
    catagory: '',
    
  })

  const {avatar,title,description,catagory} = article

  const onChange = e => setArticle({...article,[e.target.name]: e.target.value})
  onSubmit
  
const onSubmit = e =>{
  e.preventDefault();
  if(title==='' || description==='' || catagory ==='' ){
  
    setAlert('Please enter  field','danger')
  }else {
    const article ={
      avatar,
      title,
      description,
      catagory
    }
    
   if(current !==null) {  
     updateArticle(current);
     history.push('/profile')
     
     
   } else{
     postArticle(article)};
     history.push('/profile')
     
  }


}


return (
  <div className='card-panel'>
    <div className='form-container'>
    <h2>{current !==null ? 'Update Article':'Create Article'}</h2>
    <form onSubmit={onSubmit}>
    <label htmlFor='avatar'>
avatar ?  <i className="large material-icons">add_a_photo
        </i> : <img src={avatar} className='responsive-img round-img'/>

   </label>
      <input type='file' className='hide'  onChange={onChange}/>
   

        <div className="form-group">
            <label htmlFor="name">Article  Title</label>
            <input type="text" name="bio" value={title} placeholder='Add Title' onChange={onChange} />
        </div>
        <div className="form-group">
            <label htmlFor="desc">Article Description</label>
            <input type="text" name='description' value={description} placeholder='Describe Article' onChange={onChange} />
        </div>
      
        <input type="submit" value={current !==null ? 'Update' : 'Post'} className="btn btn-success block" />
    </form>
</div>
</div>

  )
}

ArticleForm.propTypes={
  current: propTypes.object.isRequired,
  postArticle: propTypes.func.isRequired,
  updateArticle: propTypes.func.isRequired,
  
}

const mapStateToProps = state =>({
  current: state.current,

  
  
})


export default connect(mapStateToProps,{postArticle,updateArticle})(ArticleForm);



 
