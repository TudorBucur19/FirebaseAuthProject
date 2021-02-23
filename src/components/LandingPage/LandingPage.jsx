import React, { useContext, useEffect, useState } from 'react';
import './LandingPage.scss';
import fire from '../../utils/fire';


 function LandingPage() {    
  const [entries, setEntries] = useState([]);
    
    useEffect(() => {
        
        const unsubscribe = fire
        .firestore()
        .collection('upImages')
        .onSnapshot((snapshot) => {
            const newEntry = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setEntries(newEntry);
            })
        return () => unsubscribe();
    }, []);

    console.log(entries);



//   function useEntries() {
//     const [entries, setEntries] = useState([]);
    
//     useEffect(() => {
//         const unsubscribe = fire
//         .firestore()
//         .collection('upImages')
//         .onSnapshot((snapshot) => {
//             const newEntry = snapshot.docs.map((doc) => ({
//                 id: doc.id,
//                 ...doc.data()
//             }))
//             setEntries(newEntry);
//             })
//         return () => unsubscribe();
//     }, [])

//     return entries;
// };



    return ( 
        
          <div className="container">                
              <div className="landing-message">
                <h2 className="message">Welcome! Please Sign In</h2>
              </div>
              {/* { imgList.map(picture =>
                  <img src={picture.url} alt="image from db"/>
                  )
              } */}
              {entries.length > 0 &&
              <img src={entries[0].url} alt="bruno"/>
              }                                              
          </div>
        
     );
}
 
export default LandingPage;