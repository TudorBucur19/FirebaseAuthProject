import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AuthenticationContextProvider from './contexts/AuthenticationContext';
import SwitchRoutes from './SwitchRoutes';
import { ROUTES } from './Routes';
import Navbar from './components/Navbar/Navbar';



function App() {
  
  return (
    <Router>      
      <div className="App">  
        <AuthenticationContextProvider> 
          <Navbar/>
          <SwitchRoutes routes={ROUTES}/>          
        </AuthenticationContextProvider>          
      </div>      
    </Router>
  );
}

export default App;
