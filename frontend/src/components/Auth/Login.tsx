
import { useState } from "react";
import { auth, googleProvider } from "../../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Navigate } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setLogin } from "../../store/user/loginSlice";


function Login() {

    const isLoggedIn: boolean = useSelector((state: RootState) => state.login.value);
    const dispatch = useDispatch<AppDispatch>();

    console.log(`isLoggedIn ${isLoggedIn}`)
    console.log(`token ${window.localStorage.getItem('userToken')}`)

    
    const signInWithGoogle = async () => {
        try {
          const result = await signInWithPopup(auth, googleProvider);
          const user = result.user;
          const idToken = await user.getIdToken();
          window.localStorage.setItem('userToken', idToken);
          dispatch(setLogin(true))
          window.localStorage.setItem('isLoggedIn', 'true');
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
