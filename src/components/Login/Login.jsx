import React, { useContext } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from './firebase.config'
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const googleSignInHandler = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                console.log(signedInUser)
                setLoggedInUser(signedInUser)
                if (location.state) {
                    navigate(location.state?.from)
                }


                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    return (
        <div>
            <h1>This is login</h1>
            <button onClick={googleSignInHandler}> <GoogleIcon /> Google Signin</button>
        </div>
    );
};

export default Login;