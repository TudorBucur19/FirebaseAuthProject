import React from 'react';
import InfoCard from '../ReusableComponents/InfoCard';
import contactInfo from '../../images/contact-information.png';

const ContactPage = () => {
    const INFO = {
        name: "New York City, NY",
        email: "company@routes.com",
        phone: "0723789004",
        website: "www.example.com"
    }

    return ( 
        <div>
            <InfoCard info={{...INFO}} image={contactInfo}/>
        </div>
     );
}
 
export default ContactPage;