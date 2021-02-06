import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import AuthenticationContextProvider from './contexts/AuthenticationContext';



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
