
import { useState } from "react";
import { auth, googleProvider } from "../../firebase-config";
import {
  fetchSignInMethodsForEmail,
  signInWithPopup,
  signOut,
  EmailAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Navigate } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setLogin } from "../../store/user/loginSlice";
import { createUserAsync } from "../../store/user/singleUserAsyncSlice";


function Login() {

    const isLoggedIn: boolean = useSelector((state: RootState) => state.login.value);
    const dispatch = useDispatch<AppDispatch>();

    console.log(`isLoggedIn ${isLoggedIn}`)
    console.log(`token ${window.localStorage.getItem('userToken')}`)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

      const signUp = async () => {
        try {
          const result = await createUserWithEmailAndPassword(auth, email, password);
          const user = result.user;
          const emailId = user.email || '';
          const idToken = await user.getIdToken();
          window.localStorage.setItem('userToken', idToken);
          dispatch(setLogin(true))
          window.localStorage.setItem('isLoggedIn', 'true');
        } catch (err) {
          console.error(err);
        }
      };

      const signIn = async () => {
        try {
          const result = await signInWithEmailAndPassword(auth, email, password);
          const user = result.user;
          const emailId = user.email || '';
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
      {!isLoggedIn 
        ? 
      <div>
        <input
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
          className="text-black"
        />
        <input
          placeholder="Password..."
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="text-black"
        />
        <button onClick={signUp}>Sign Up</button>
        <button onClick={signIn}>Sign In</button>
      </div> : <Navigate to="/board"/>}
    </div>
	);
}

export default Login;
