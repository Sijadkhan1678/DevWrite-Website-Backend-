import React,{ useState} from 'react';


const Register = () =>{

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
}
 return(
   
       <div className='backgroundimg'>
       
    <div className='form-container'>
    <h1 className='text-light'>Create Account</h1>
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
</div>

 )

}

export default Register;
