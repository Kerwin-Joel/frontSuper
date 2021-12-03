import 'firebase/firestore';

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyARxAKFrs7iAMEsVitrULdtAgg0UO-PGKU",
    authDomain: "super-985c7.firebaseapp.com",
    projectId: "super-985c7",
    storageBucket: "super-985c7.appspot.com",
    messagingSenderId: "419014537024",
    appId: "1:419014537024:web:af980ea8257fba72f3d4a5"
}); 

// Initialize Firebase
const db = getFirestore(firebaseApp);



export { db }
