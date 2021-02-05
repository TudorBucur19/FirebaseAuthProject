import './App.scss';
import React, { useContext } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import AuthenticationContextProvider from './contexts/AuthenticationContext';
import { AuthenticationContext } from '../src/contexts/AuthenticationContext';


function App() {

  
  return (
    <Router>      
      <div className="App">  
        <AuthenticationContextProvider> 
          <LandingPage/>
        </AuthenticationContextProvider>     
          
      </div>      
    </Router>
  );
}

export default App;
