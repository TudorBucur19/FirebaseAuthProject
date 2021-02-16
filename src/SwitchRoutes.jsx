import React, { useEffect, useContext } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { AuthenticationContext } from './contexts/AuthenticationContext';
import RoutesWithSubRoutes from './Routes';


const SwitchRoutes = ({ routes }) => {
    const { user } = useContext(AuthenticationContext);
    const history = useHistory();

    // useEffect(() => {
    //     if(!user){
    //         history.push('/login');
    //     }
    //     history.push('/');
    // }, [])
    
    return (
        <Switch>
            {routes.map((route, i) => {
                return <RoutesWithSubRoutes key={route.key} {...route}/>
            })        
            }
            <Route component={() => <h2>Page not found</h2>} />
        </Switch>
     );
}
 
export default SwitchRoutes;