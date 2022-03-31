import React,{useState} from 'react'


 const Profileform = () => {
   
  const [profile,setProfile] = useState({
    
    bio: '',
    skills: '',
    facebook:'',
    twitter: '',
    github: '',
    instagram:''
  })

  const {bio,skills,facebook,twitter,github,instagram} = profile

  const onChange = e => setProfile({...profile,[e.target.name]: e.target.value})
  return (
    <div className='/*form-container*/'>



    <h2>Create Profile</h2>
    <form /*onSubmit={onSubmit} */ >
        <i className="large material-icons">add_a_photo
</i>

        <div className="form-group">
            <label htmlFor="name">bio</label>
            <input type="text" name="bio" value={bio} placeholder='Write About Yourself' onChange={onChange} />
        </div>
        <div className="form-group">
            <label htmlFor="skills">Add Skills</label>
            <input type="text" name="skills" value={skills} placeholder='Add Skills' onChange={onChange} />
        </div>
        <div className="form-group">
            <label htmlFor="password">Facebook Link</label>
            <input type="password" name="facebook" value={facebook} placeholder='Facebook Link' onChange={onChange} minLength="6"/>
        </div>
        <div className="form-group">
            <label htmlFor="twitter">Confirm Password</label>
            <input type="password" name="twitter" value={twitter} placeholder='Twitter Link' onChange={onChange} minLength="6" />
        </div>
          <div className="form-group">
            <label htmlFor="twitter">Confirm Password</label>
            <input type="password" name="twitter" value={twitter} placeholder='Twitter Link' onChange={onChange} minLength="6" />
        </div>
          <div className="form-group">
            <label htmlFor="twitter">Confirm Password</label>
            <input type="password" name="twitter" value={twitter} placeholder='Twitter Link' onChange={onChange} minLength="6" />
        </div>
        <input type="submit" value="Create" className="btn btn-success block" />
    </form>
</div>

  )
}

export default Profileform;



 
