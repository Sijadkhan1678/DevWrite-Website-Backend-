

 import React, { Fragment} from 'react';
 import avatar from '../../images/profile.png'
 import {connect} from 'react-redux';
 import  {Link} from 'react-router-dom';
 import {setProfile} from '../../actions/profileActions';
 import ArticleItem from './ArticleItem'
 import propTypes from 'prop-types'
 
 const Profile = ({profile:{profile,profileArticles},auth}) => {
   const {isAuthenticated}=auth
   
   const {user,photo,name,/*skills*/bio,facebook,twitter,github,instagram} = profile;
   
   return ( 
    
     <Fragment>
     <div classNam='card grid-2'>
     <div classNam= 'all-center'>
     
  <img src={photo ? photo:avatar} alt="Profile" className="responsive-img round-img"/>
   <h3>{name}</h3>
   
{isAuthenticated && auth.user._id === user._id   &&( <Link to='/profileform' onClick={setProfile(profile)} className='btn btn-dark my-1' >Edit Profile</Link>) }
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
   <a href={facebook}> <i className='material-icons'> facebook</i></a>
 )}
 </div>
<div className="badge badge-success">
 {twitter &&(
   <a href={twitter}> <i className='material-icons'> twitter</i></a>
 )}
</div>
 <div className="badge badge-light">
  {github &&(
   <a href={github}> <i className='material-icons'>github</i></a>
 )}
 </div>
<div className="badge badge-dark">
 {instagram &&(
   <a href={instagram}> <i className='material-icons'>instagram </i></a>
 )}
</div>
  </div>
     
    { profileArticles.map(article=> <ArticleItem key={article._id}  article={article} />)}
     
     
     </Fragment>
     )
   
 }
 
 Profile.propTypes = {
 profile : propTypes.object.isRequired,
 auth: propTypes.object.isRequired,
 setProfile : propTypes.func.isRequired
 
 }
 const mapStateToProps = state => ({
   profile: state.profile,
   auth: state.auth
   

 })
 export default connect(mapStateToProps,{setProfile}) (Profile);
