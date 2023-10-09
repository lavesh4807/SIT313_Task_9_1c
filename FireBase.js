import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDYJMVESN1vHLOLlbtg82Mrh9iXV0FthSo",
  authDomain: "myproject-4a6f0.firebaseapp.com",
  projectId: "myproject-4a6f0",
  storageBucket: "myproject-4a6f0.appspot.com",
  messagingSenderId: "883116486295",
  appId: "1:883116486295:web:c4da0503de7a6bfd98c3d2",
  measurementId: "G-WGEVD945TL"
};
    
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);
export {auth, db} ;