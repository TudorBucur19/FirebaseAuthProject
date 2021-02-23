import React, { useContext } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import mainLogo from '../../images/nav_logo.png';

const Navbar = () => {

    const {user, handleLogout} = useContext(AuthenticationContext);

    return ( 
        <nav className="navbar">  
            <div className="navbar__logo">
                <Link to={ "/" }> 
                    <img src={mainLogo} alt="main logo"/>
                </Link>
            </div>

            <div className="navbar__menu-items">
                <ul>
                    <Link to={"/users"}>
                        <li>Meet our team</li> 
                    </Link>
                    <Link to="/contact">
                        <li>Contact us</li>
                    </Link>
                    
                </ul>    
            </div>

            <div className="navbar__auth">
                <ul>
                    { user ?                     
                        <li onClick={handleLogout}>Logout</li>
                    :
                    <Link to="/login">    
                        <li>Login</li>
                    </Link>
                    }
                </ul>               
            </div>           
        </nav>
     );
}
 
export default Navbar;