import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Users from '../Users/Users';
import './LandingPage.scss';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import UserInfo from '../UserInfo/UserInfo';

const LandingPage = () => {

    const { user } = useContext(AuthenticationContext);
    return ( 
        
          <div className="container">                
              <div className="landing-message">
                <h2 className="message">Welcome! Please Sign In</h2>
              </div>                                                    
          </div>
        
     );
}
 
export default LandingPage;