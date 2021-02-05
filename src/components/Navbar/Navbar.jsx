import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = ({isUser, handleLogout}) => {
    return ( 
        <div className="navbar">  
            <div className="navbar-logo"><h2>Logo</h2></div>          
            <div className="navbar-links">
                { isUser ? 
                <Link to="/">
                    <h3 onClick={handleLogout}>Logout</h3>
                </Link>
                 :
                <Link to="/login">    
                    <h3>Login</h3>
                </Link>
                }
                
                
            </div>           
        </div>
     );
}
 
export default Navbar;