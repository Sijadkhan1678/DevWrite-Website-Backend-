import React,{ useState,useEffect} from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types'
import {register,clearErrors} from '../../actions/authActions'
import {setAlert} from '../../actions/alertActions';

const Register = ({auth:{isAuthenticated,error},register,history}) =>{

   useEffect(()=>{
   
   if(isAuthenticated){
    history.push('/home');
   }
   if(error === 'user with this email already exist'){
     setAlert(error,'danger');
     clearErrors();
   }
   // eslint-disable-next-line
},[isAuthenticated,error,history])

 
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
    
    setAlert('please enter all field','danger')
    
    } if(password !== password2){
       
       setAlert('password and confirm password does not match','danger');
    
    } else{
    
    const formData ={
         name,
         email,
         password 
    }
        
      register(formData)
    
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

Register.propTypes = {
  
  register: propTypes.func.isRequired,
  setAlert: propTypes.func.isRequired,
  auth : propTypes.object.isRequired
  
}
 const mapStateToProps = state => ({
   
      auth: state.auth
 
 })
 

export default connect(mapStateToProps,{register,setAlert}) (Register);
