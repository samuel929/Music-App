// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMyZAa1uMqYHIfGXRDWYiMdQuOV4cRueY",
    authDomain: "dices-a3372.firebaseapp.com",
    projectId: "dices-a3372",
    storageBucket: "dices-a3372.appspot.com",
    messagingSenderId: "1018785091917",
    appId: "1:1018785091917:web:6ac8be05c577644794a704",
    measurementId: "G-NDVDN68Y68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };