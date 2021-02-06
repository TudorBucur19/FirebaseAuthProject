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

    const {user} = useContext(AuthenticationContext);
    return ( 
        <Router>
          <div className="container">
              <Navbar/>
              
              <Switch>
                { !user ?
                <div>
                  <h2>Wellcome!</h2>
                  <Route exact path="/login" component={Login}/>
                </div>               
                :
                <div>
                  <Route path="/home" component={Home}/> 
                  <Route path="/users" exact component={Users}/>
                  <Route path="/users/:id" component={UserInfo}/>
                </div>      
                }                        
              </Switch>
            
          </div>
        </Router>
     );
}
 
export default LandingPage;