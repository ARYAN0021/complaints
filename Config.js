import firebase from 'firebase';
require('@firebase/firestore');
import "firebase/auth";


    const firebaseConfig = {
        apiKey: "AIzaSyABF8I4XA2g1c4uCWcaJbRDLWAZ0Z-S0KM",
        authDomain: "virtual-pet-1-80a0d.firebaseapp.com",
        databaseURL: "https://virtual-pet-1-80a0d-default-rtdb.firebaseio.com",
        projectId: "virtual-pet-1-80a0d",
        storageBucket: "virtual-pet-1-80a0d.appspot.com",
        messagingSenderId: "497511709500",
        appId: "1:497511709500:web:a3a8de5c190f4ded13bc39"
      };

if (!firebase.apps.length){
    firbase.initializeApp(firebaseConfig)
}

export default firebase.firestore()