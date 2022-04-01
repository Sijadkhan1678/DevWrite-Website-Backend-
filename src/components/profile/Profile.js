

 import React, { Fragment} from 'react';
 //import avatar from '../'
 import {connect} from 'react-redux'
 import  {Link} from 'react-router-dom'
 
 
 const Profile = ({profile,articles,auth}) => {
   const {isAuthenticated,user}=auth
   
   const {_id,photo,name,skills,bio,facebook,twitter,github,instagram} = profile
   
   return ( 
    
     <Fragment>
     <div classNam='card grid-2'>
     <div classNam= 'all-center'>
     
  <img src={photo ? photo:avatar} alt="Profile" className="round-img"/>
   <h3>{name}</h3>
   
{isAuthenticated && _id === user._id   &&( <Link to='/profileform' className='btn btn-dark my-1' >Edit Profile</Link>) }
     </div>
     <div>
  { bio && (
     <Fragment>
        <h2>Bio</h2>
        <p>{bio}</p>
        </Fragment>
        
   ) }
  
     </div>
     
     </div>
     
     <div className="user-card badge-card">
                    
 <div className="badge badge-danger">
 {facebook &&(
   <a href={facebook}> <i className='material-icons'> </i></a>
 )}
 </div>
<div className="badge badge-success">
 {twitter &&(
   <a href={twitter}> <i className='material-icons'> </i></a>
 )}
</div>
 <div className="badge badge-light">
  {github &&(
   <a href={github}> <i className='material-icons'> </i></a>
 )}
 </div>
<div className="badge badge-dark">
 {instagram &&(
   <a href={instagram}> <i className='material-icons'> </i></a>
 )}
</div>
  </div>
     
     
     </Fragment>
     )
   
 }
 
 const mapStateToProps = state => ({
   profile: state.profile,
   articles: state.profileArticle
 })
 export default connect(mapStateToProps) (Profile);