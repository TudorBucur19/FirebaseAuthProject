import React from 'react';
import './InfoCard.scss';

const InfoCard = ({info, image}) => {
    return ( 
        <div className="card-info">
                <div className="card-info__container">
                    <img className="card-info__container__photo" src={image} alt="user photo"/>
                    <div className="card-info__container__text">
                        <h3>{info.name}</h3>
                        <p>{info.email}</p>
                        <p>{info.phone}</p>
                        <p className="card-info__container__text_website">{info.website}</p>
                    </div>
                </div>
            </div>
     );
}
 
export default InfoCard;