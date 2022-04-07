import React,{useState,useEffect} from 'react';
import {updateProfile} from '../../actions/profileActions';
import {setAlert} from '../../actions/alertActions'
import {connect} from 'react-redux';
import propTypes from 'prop-types'

 const ProfileForm = ({profile:{currentProfile},updateProfile,setAlert}) => {

   useEffect(()=>{

       if(currentProfile !==null){
       setProfile(currentProfile)
       }else{
       setProfile({
          fileUrl: null,
          bio: '',
          skills: '',
          facebook:'',
          twitter: '',
          github: '',
          instagram:''
       
       })
       
       }

     
 
   
   },[currentProfile])

  const [file,setFile] = useState(null);
  //const [photoUrl,setPhotoUrl] =useState('')


  const [profile,setProfile] = useState({
    fileUrl: null,
    bio: '',
    skills: '',
    facebook:'',
    twitter: '',
    github: '',
    instagram:''
  })
  
  const {fileUrl,bio,skills,facebook,twitter,github,instagram} = profile
  
  const onChange = e => {

    setProfile({...profile,[e.target.name]: e.target.value}) 
    console.log(e.target.files[0])
    setFile(e.target.files[0])
  setProfile({...profile,fileUrl:URL.createObjectURL(e.target.files[0])}) 
   
};
  
   const  onSubmit = e =>{ 
  
      e.preventDefault();
       
    
    const formData ={
         file,
         bio,
         skills,
         facebook,
         twitter,
         github,
         instagram
    }
        
      updateProfile(formData)
    
     
  
  }
  return (
  
    <div className='card-panel'>


    <h3>{currentProfile ? 'Update Profile':'Create Profile'}</h3>
    <form onSubmit={onSubmit} >
    <label htmlFor='photo'>
{fileUrl===null ? ( <i className="large material-icons">add_a_photo
        </i>) : (<img src={fileUrl} className='responsive-img round-img'   alt='file'/>) }

   </label>
      <input type='file'  id='photo' name='photo' accept='images/*' className='hide'  onChange={onChange}/>
   

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
        <input type="submit" value={currentProfile ? 'Update profile':'Create profile'} className="btn btn-success block" />
    </form>
</div>

  )
}

ProfileForm.propTypes= {
     updateProfile: propTypes.func.isRequired,
     
     
}
const mapStateToProps = state =>({
  
   profile: state.profile

})

export default connect(mapStateToProps,{updateProfile,setAlert}) (ProfileForm);



 
