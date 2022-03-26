import React,{ useState,useEffect} from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types'
import {Register} from '../../actions/authActions'

const Register = ({isAuthenticated,Register}) =>{

 useEffect(()=>{
      if(isAuthenticated){
      
      props.history.push('/profile')
      }
 
 },{isAuthenticated}) 

 const [field,setField] = useState({

        name: '',
        email: '',
        password: '',
        password2: ''

    });

   const {name,email,password,password2}= field 

   const onChange = e =>  setField({...field,[e.target.name]: e.target.value})

   const onSubmit = e =>{

    e.preventDefault();
    
    if (name==='' || email==='' || password===''){
    
    
    } if(password !== password2){
       
    
    } else{
    
    const formData ={
         name,
         email,
         password 
    }
        
      Register(formData)
    
    }
}
 return(
   
       
       
    <div className='form-container'>
    <h2>Create Account</h2>
    <form onSubmit={onSubmit} >
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={name} placeholder='Name' onChange={onChange} />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={email} placeholder='Email' onChange={onChange} />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={password} placeholder='Password' onChange={onChange} minLength="6"/>
        </div>
        <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input type="password" name="password2" value={password2} placeholder='Confirm password' onChange={onChange} minLength="6" />
        </div>
        <input type="submit" value="Register" className="btn btn-success block" />
    </form>
</div>


 )
 


}
Register.propTypes={
 
    Register: propTypes.func.isRequired,
    isAuthenticaed: propTypes.bool.isRequired
  }
 const mapStateToProps = state => ({
   
      isAuthenticated: state.isAuthenticated
 
 })
 

export default connect(mapStateToProps,{Register}) (Register);
