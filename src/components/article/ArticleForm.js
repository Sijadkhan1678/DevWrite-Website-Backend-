import React,{useState} from 'react'


 const ArticleForm = () => {
   
  const [article,setArticle] = useState({
    
    avatar: '',
    title: '',
    description:'',
    catagory: '',
    
  })

  const {avatar,title,description,catagory} = article

  const onChange = e => setArticle({...article,[e.target.name]: e.target.value})
  return (
    <div className='form-container'>



    <h2>Create Profile</h2>
    <form /*onSubmit={onSubmit} */ >
        <i className="large material-icons">add_a_photo
</i>

        <div className="form-group">
            <label htmlFor="name">Article  Title</label>
            <input type="text" name="bio" value={title} placeholder='Write Title' onChange={onChange} />
        </div>
        <div className="form-group">
            <label htmlFor="desc">Article Description</label>
            <input type="text" name='description' value={description} placeholder='Describe Article' onChange={onChange} />
        </div>
      
        <input type="submit" value="Create" className="btn btn-success block" />
    </form>
</div>

  )
}

export default Profileform;



 
