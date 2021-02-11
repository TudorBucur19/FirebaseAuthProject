import React, { useEffect, useState } from 'react';
import './UserInfo.scss';
import profilephoto from '../../images/laptop-user.png';
import { useParams, useHistory, useLocation } from 'react-router-dom';


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
        console.log(user)
    }

    return (
            <div className="user-info">
                <div className="user-info__container">
                    <img className="user-info__container__photo" src={profilephoto} alt="user photo"/>
                    <div className="user-info__container__text">
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <p className="user-info__container__text_website">{user.website}</p>
                    </div>
                </div>
            </div>
     );
}
 
export default UserInfo;