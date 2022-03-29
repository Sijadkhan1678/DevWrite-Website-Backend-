import React from 'react'



 const Profileform = () => {
  return (
    <div className='container'>
    <div className="row">
 <form className="col s12">
   <div className="row">
     <div className="input-field col s7">
       <textarea id="textarea1" class="materialize-textarea"></textarea>
       <label htmlFor="textarea1">Write Aboute You</label>
     </div>
   </div>

   <div class="row">
    <div class="input-field col s6">
      <input value="Alvin" id="first_name2" type="text" class="validate"/>
      <label class="active" for="first_name2">Enter your Skills</label>
    </div>
  </div>

  <div class="row">
    <div class="input-field col s6">
      <input value="Alvin" id="first_name2" type="text" class="validate"/>
      <label class="active" for="first_name2">Facebook link </label>
    </div>
    <div class="row">
    <div class="input-field col s6">
      <input value="Alvin" id="first_name2" type="text" className="validate"/>
      <label class="active" for="first_name2">Twitter link</label>
    </div>
  </div>
  </div>
  <div className="row">
    <div className="input-field col s6">
      <input value='github' id="first_name2" type="text" class="validate"/>
      <label className="active" htmlFor="first_name2">Gihub link</label>
    </div>
    <div class="row">
    <div class="input-field col s6">
      <input value="Alvin" id="first_name2" type="text" class="validate"/>
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



 