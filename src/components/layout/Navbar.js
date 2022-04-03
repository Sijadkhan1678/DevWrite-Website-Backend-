import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'


const Navbar = ({auth}) =>{
  const {isAuthenticated,user} =auth
   const authLinks = (
        <Fragment>
            <li>
        <Link to='/profile'>
   {  user && user.photo ? <img src={user.photo} className='responsive-img round-img' /> : <i className='material-icons-outlined'>account_circle</i>  }
        </Link> </li>
            <li>
                <a onClick={onLogout} href="#!">
                    <i className='material-icons-outlined'>logout</i>
                    <span className="hide-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    );
    
    const guestLinks = (
      <Fragment>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </Fragment>
    )

    return(

        <nav className="purple accent-1 accent-4">
        <div className="nav-wrapper">
          <Link to='/Home'  className="brand-logo py-2">DevWrite</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">

   {isAuthenticated ? authLinks :guestLinks}
          </ul>
        </div>
      </nav>
    )
}

Navbar.propTypes={
  auth: propTypes.object.isRequired
}
const  mapStateToProps = state =>{
 auth: state.auth
 
}

export default connect(mapStateToProps,null)(Navbar);
