import React from 'react';
import {Redirect,Route} from 'react-router-dom';
import {connent} from 'react-redux';


const PrivateRoute = ({component: Component,...rest},auth: {isAuthenticated}) =>{
   
   <Route {...rest} render={ props => !isAuthenticated ? (<Redirect to='login'>): (<Component {...props} />)  } />

}


const mapStateToProps = state => ({

 auth: state.auth

})

export default connect(mapStateToProps) (PrivateRoute);
