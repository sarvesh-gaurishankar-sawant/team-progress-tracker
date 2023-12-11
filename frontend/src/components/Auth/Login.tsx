
import { useState } from "react";
import { auth, googleProvider } from "../../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Navigate } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";


function Login() {

    const [isLoggedIn, setisLoggedIn] = useState(
      false || window.localStorage.getItem('isLoggedIn') === 'true'
    );

    const [token, setToken] = useState('');

    console.log(`isLoggedIn ${isLoggedIn}`)
    console.log(`token ${token}`)

    
    const signInWithGoogle = async () => {
        try {
          const result = await signInWithPopup(auth, googleProvider);
          const user = result.user;
          const idToken = await user.getIdToken();
          setToken(idToken)
          setisLoggedIn(true)
          window.localStorage.setItem('isLoggedIn', 'true');
        } catch (err) {
          console.error(err);
        }
    };

    const logout = async () => {
        try {
          await signOut(auth);
          setisLoggedIn(false)
          setToken('')
          window.localStorage.setItem('isLoggedIn', 'false');
        } catch (err) {
          console.error(err);
        }
    };

	return (
	<div>
      {!isLoggedIn ? <button onClick={signInWithGoogle}> Sign In With Google</button> : <Navigate to="/board"/>}
    </div>
	);
}

export default Login;
