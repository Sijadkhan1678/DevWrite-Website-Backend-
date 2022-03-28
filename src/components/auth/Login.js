import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types'
import {login,clearErrors} from '../../actions/authActions';
import {setAlert} from '../../actions/alertActions';

const Login = ({auth:{isAuthenticated,error},login,setAlert,history}) => {
  
useEffect(()=>{
   if(isAuthenticated){
     history.push('/home');
   }
   if(error=== 'user with this email does not exist'){

     setAlert(error,'danger');
     clearErrors();
   }
   // eslint-disable-next-line
},[isAuthenticated,error,history])

 const [field,setField] = useState({

        email: '',
        password: '',
       

    });

   const {email,password} = field 

const onChange = e =>  setField({...field,[e.target.name]: e.target.value})

const onSubmit = e =>{
  e.preventDefault()
  
  if( email=== '' || password === ''){
    setAlert('please fill the login form','danger')
  } else {
    
    
    login({email,password});
  }

    
}
 return(

    <div>
    <div className='form-container'>
    <h2>Login Form</h2>
    <form onSubmit={onSubmit} >
    
              <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={email} placeholder='Email' onChange={onChange} />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={password} placeholder='Password' onChange={onChange} minLength="6"/>
        </div>
        
         <input type="submit" value="Login" className="btn btn-primary block" />
    </form>
</div>
</div>
 )

}

Login.propTypes = {
  
  login: propTypes.func.isRequired,
  setAlert: propTypes.func.isRequired,
  auth : propTypes.object
}
const mapStateToProps = state => ({
  auth : state.auth,
  
})

export default connect(mapStateToProps,{login,setAlert}) (Login);
