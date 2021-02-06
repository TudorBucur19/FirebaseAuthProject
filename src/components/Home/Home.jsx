import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Users from '../Users/Users';

const Home = () => {
    return ( 
        <section className="home">
            <nav>
               <h2>Hi user! How are you?</h2>
            </nav>
        </section>
     );
}
 
export default Home;