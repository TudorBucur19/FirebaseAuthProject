import React, { useState } from 'react';
import InfoCard from '../ReusableComponents/InfoCard';
import contactInfo from '../../images/contact-information.png';
import fire, { storage } from '../../utils/fire';

const ContactPage = () => {
    const INFO = {
        name: "New York City, NY",
        email: "company@routes.com",
        phone: "0723789004",
        website: "www.example.com"
    }

    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");

    const handleChange = e => {
        if(e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        const collectionRef = fire.firestore().collection('upImages');
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
            () =>{
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    collectionRef.add({ url: url });
                    setUrl(url);
                });
            }
        )
    }
    

    return ( 
        <div>
            <input type="file" onChange={handleChange}/>
            <button onClick={handleUpload}>Upload</button>
            <InfoCard info={{...INFO}} image={contactInfo}/>
        </div>

        
     );
}
 
export default ContactPage;