import React from "react";
import { Link } from "react-router-dom";


const Navbar = () =>{

    return(

        <nav className="purple accent-1 accent-4">
        <div className="nav-wrapper">
          <Link  className="brand-logo py-2">DevWrite</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">

            <li><Link to='/Home'> Home </Link></li>

            <li> <Link to='/login'> Login </Link></li>

            <li><Link to='/register'> Register </Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;
