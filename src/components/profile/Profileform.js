import React,{useState} from 'react'


 const Profileform = () => {
   
  const [profile,setProfile] = useState({
    
    bio: '',
    facebook:'',
    twitter: '',
    github: '',
    instagram:''
  })

  const {bio,facebook,twitter,github,instagram} = profile

  const onChange = e => setProfile({...profile,[e.target.name]: e.target.value})
  return (
    <div className='container'>

    <i className="large material-icons">add_a_photo
</i>

    <div className="row">
 <form className="col s12">
   <div className="row">
     <div className="input-field col s9">
       <textarea id="textarea1" class="materialize-textarea">{bio}</textarea>
       <label htmlFor="textarea1">Write Your bio</label>
     </div>
   </div>

   <div className="row">
    <div className="input-field col s6">
      <input value="Alvin" id="first_name2" type="text" class="validate"/>
      <label className="active" for="first_name2">Enter your Skills</label>
    </div>
  </div>

  <div className="row">
    <div className="input-field col s6">
      <input value={facebook} id="first_name2" type="text" class="validate" onchange={onChange}/>
      <label className="active" for="first_name2">Facebook link </label>
    </div>
    <div class="row">
    <div class="input-field col s6">
      <input value={twitter} id="first_name2" type="text" className="validate" onchange={onChange}/>
      <label class="active" for="first_name2">Twitter link</label>
    </div>
  </div>
  </div>
  <div className="row">
    <div className="input-field col s6">
      <input value={github} id="first_name2" type="text" class="validate" onchange={onchange}/>
      <label className="active" htmlFor="first_name2">Gihub link</label>
    </div>
    <div class="row">
    <div class="input-field col s6">
      <input value={instagram} id="first_name2" type="text" class="validate" onchange={onChange}/>
      <label class="active" for="first_name2">Instagram link</label>
    </div>
  </div>
  </div>

  </form>
        

</div>
</div>
  )
}

export default Profileform;



 