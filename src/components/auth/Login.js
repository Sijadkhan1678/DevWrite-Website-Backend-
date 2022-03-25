import React,{useState} from 'react'

const Login = () =>{

 const [field,setField] = useState({

        email: '',
        password: '',
       

    });

   const {email,password}= field 

const onChange = e =>  setField({...field,[e.target.name]: e.target.value})

const onSubmit = e =>{

    e.preventDefault();
}
 return(

    <div className='form-container'>
    <h1>Login Form</h1>
    <form onSubmit={onSubmit} >
    
              <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={email} placeholder='Email' onChange={onChange} />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={password} placeholder='Password' onChange={onChange} minLength="6"/>
        </div>
        
         <input type="submit" value="Register" className="btn btn-primary block" />
    </form>
</div>
 )

}

export default Register;
