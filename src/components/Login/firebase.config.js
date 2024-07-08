import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyC5oglTYsihytnRaLsAmP2AL7oRJlGmTLE",
    authDomain: "burj-al-arab-53e06.firebaseapp.com",
    projectId: "burj-al-arab-53e06",
    storageBucket: "burj-al-arab-53e06.appspot.com",
    messagingSenderId: "662788525282",
    appId: "1:662788525282:web:a8adb78cd68f3a5a6ce2bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;