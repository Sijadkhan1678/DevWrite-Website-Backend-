import React from "react";
import { Link } from "react-router-dom";


const Navbar = () =>{

    return(
        <div className='navbar flex-2'>
            <h1>DevWrite</h1>
            <nav className="flex-1">

                <ul className="flex-1">
                
                <li> <Link>Register</Link> </li>
                <li> <Link>Register</Link> </li>
                <li> <Link>Register</Link> </li>
                <li> <Link>Register</Link> </li>
                    
                
                </ul>
            </nav>
        
        </div>
    )
}

export default Navbar;