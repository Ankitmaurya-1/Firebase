
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBPky6B6GG1zCYlHG6O2tGJc2eubBPihkY",
    authDomain: "app-bedbd.firebaseapp.com",
    projectId: "app-bedbd",
    storageBucket: "app-bedbd.appspot.com",
    messagingSenderId: "153908089346",
    appId: "1:153908089346:web:8e8e8c990d65728ecd8d1b",
    databaseURL: "https://app-bedbd-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);