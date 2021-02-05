import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Login from '../Login/Login';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import './LandingPage.scss';

const LandingPage = () => {

    const {user} = useContext(AuthenticationContext);
    return ( 
        <div className="container">
            <Navbar/>
            <Switch>
              { !user ? 
              <Route exact path="/" component={Login}/>
              :          
              <Route Redirect to="/home" component={Home}/>        
              }  

                      
            </Switch>
          
        </div>
     );
}
 
export default LandingPage;