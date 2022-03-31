

import React, { Fragment } from 'react'

const Profile = () => {
 return ( 
   <Fragment>
     <div className='row'>
     <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s2">
              <img src="images/yuna.jpg" alt="" class="circle responsive-img"/> 
            </div>
            <div class="col s10">
              <span class="black-text">
                This is a square image. Add the "circle" class to it to make it appear circular.
              </span>
            </div>
          </div>
        </div>
      </div>
  </div>
        /* social */
        
        <div className='row'>
          <div className='align-center'>
        <di className='col center-align s2'>instagram</di>
        <di className='col s2'>facebook</di>
        <di className='col s2'>facebook</di>
        </div>
        </div>

          /* article*/
   <div className='divider'>
     <div className='section'>
   <h4 className='center-align'>Articles</h4>
   
   
       </div>
         </div>

   
   </Fragment>
   
 )
}

export default Profile;