import React, { useContext } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { AuthenticationContext } from './contexts/AuthenticationContext';
import RoutesWithSubRoutes from './Routes';


const SwitchRoutes = ({ routes }) => {
    const { user } = useContext(AuthenticationContext);
    const history = useHistory();
    
    return (
        <Switch>
            {routes.map((route) => {
                return <RoutesWithSubRoutes key={route.key} {...route}/>
            })        
            }
            <Route component={() => <h2>Page not found</h2>} />
        </Switch>
     );
}
 
export default SwitchRoutes;