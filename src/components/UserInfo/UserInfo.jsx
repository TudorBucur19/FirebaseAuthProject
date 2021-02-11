import React, { useEffect, useState } from 'react';
import './UserInfo.scss';
import profilephoto from '../../images/laptop-user.png';
import { useParams } from 'react-router-dom';
import InfoCard from '../ReusableComponents/InfoCard';


const UserInfo = () => {
    const {id} = useParams();

    useEffect(() => {
        fetchItem()
    }, [] );

    const [user, setUser] = useState({});

    const fetchItem = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const item = await data.json();
        setUser(item);
    }

    return (
        <InfoCard info={{...user}} image={profilephoto}/>
     );
}
 
export default UserInfo;