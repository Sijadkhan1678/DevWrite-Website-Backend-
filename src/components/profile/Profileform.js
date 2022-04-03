import React,{useState,useEffect} from 'react';
import {updateProfile} from '../../actions/profileActions';
import {setAlert} from '../../actions/alertActions'
import {connect} from 'react-redux';
import propTypes from 'prop-types'

 const ProfileForm = ({current,updateProfile}) => {
   useEffect(()=>{
       if(current !==null){
       setProfile(current)
       }else{
       setProfile({
          photo: '',
          bio: '',
          skills: '',
          facebook:'',
          twitter: '',
          github: '',
          instagram:''
       
       })
       }
   
   },[current])
   
  const [profile,setProfile] = useState({
    photo: '',
    bio: '',
    skills: '',
    facebook:'',
    twitter: '',
    github: '',
    instagram:''
  })

  const {photo,bio,skills,facebook,twitter,github,instagram} = profile

  const onChange = e => setProfile({...profile,[e.target.name]: e.target.value});
  
  const  onSubmit = e =>{
  
      e.preventDefault();
       
    if (bio.length !==12){
    setAlert('Bio Should be 12 charactors')
    }
    
     else{
    
    const formData ={
         photo,
         bio,
         skills,
         facebook,
         twitter,
         github,
         instagram
    }
        
      updateProfile(formData)
    
    }      
  
  }
  return (
  
    <div className='card-panel'>


    <h3>{current ? 'Update Profile':'Create Profile'}</h3>
    <form onSubmit={onSubmit}  >
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
        <input type="submit" value={current ? 'Update profile':'Create profile'} className="btn btn-success block" />
    </form>
</div>

  )
}

ProfileForm.propTypes= {
     updateProfile: propTypes.func.isRequired,
     current: propTypes.object.isRequired
     
}
const mapStateToProps = state =>({
  
   current: state.article.current

})

export default connect(mapStateToProps,{updateProfile}) (ProfileForm);



 
