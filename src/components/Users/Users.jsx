import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const Users = () => {

    useEffect(() => {
        fetchItems();
    }, [])
    
    const [users, setUsers] = useState([]);
        

    const fetchItems = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const items = await data.json();
        console.log(items);
        setUsers(items);
        
    }
    return ( 
        <div>
            {users.map(user => (
                <h3 key={user.id}>                   
                <Link to={`/users/${user.id}`}>{user.name}</Link>
                </h3>
            ))}
        </div>
     );
}
 
export default Users;