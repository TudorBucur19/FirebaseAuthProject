import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Users from './components/Users/Users';
import UserInfo from './components/UserInfo/UserInfo';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import ContactPage from './components/ContactPage/ContactPage';


 export const ROUTES = [
    // {
    //     path: "/",
    //     key: "ROOT",
    //     exact: true,
    //     component: LandingPage
    // },

    {
        path: "/login",
        key: "LOGIN",
        exact: false,
        component: Login
    },

    {
        path: "/",
        key: "HOME",
        exact: true,
        component: Home
    },

    {
        path: "/users",
        key: "USERS",
        exact: true,
        component: Users,
       
    },

    {            
        path: "/users/:id",
        key: "USERS_ID",
        exact: true,
        component: UserInfo
    },

    {
        path: "/contact",
        key: "CONTACT",
        exact: false,
        component: ContactPage
    }

    
];

const RoutesWithSubRoutes = (route) => {
    return (        
      <Route exact={route.exact} path={route.path} component={route.component} />
    )                     
}
 
export default RoutesWithSubRoutes;



