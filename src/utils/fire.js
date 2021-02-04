import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB2Wr4RMJMgi4JCHzpyrKxG6J5FC5ob0rM",
    authDomain: "usersapi-494ba.firebaseapp.com",
    projectId: "usersapi-494ba",
    storageBucket: "usersapi-494ba.appspot.com",
    messagingSenderId: "48364372408",
    appId: "1:48364372408:web:0084d03196a6663ea5cf4d"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;