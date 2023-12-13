
import { useState } from "react";
import { auth, googleProvider } from "../../firebase-config";
import {
  fetchSignInMethodsForEmail,
  signInWithPopup,
  signOut,
  EmailAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";
import { NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setLogin } from "../../store/user/loginSlice";
import { createUserAsync, getUserByEmailAsync } from "../../store/user/singleUserAsyncSlice";
import { UserType } from "../type";
import { getUserAsync, setUserSlice } from "../../store/user/userSlice";
import Swal from 'sweetalert2';
import { GoogleAuthProvider } from "firebase/auth";



function Login() {

    const isLoggedIn: boolean = useSelector((state: RootState) => state.login.value);
    
    const provider = new GoogleAuthProvider();

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    console.log(`isLoggedIn ${isLoggedIn}`)
    console.log(`token ${window.localStorage.getItem('userToken')}`)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const location = useLocation();
    const message = location.state?.message;

      const signIn = async () => {
        try {
          
          const result = await signInWithEmailAndPassword(auth, email, password);
          const user = result.user;
          const emailId = user.email || '';
          const idToken = await user.getIdToken();
          window.localStorage.setItem('userToken', idToken);
          dispatch(setLogin(true))
          window.localStorage.setItem('isLoggedIn', 'true');
          window.localStorage.setItem('email', emailId)
          await dispatch(getUserByEmailAsync(emailId))
          
        } catch (err) {
          let errString: string = String(err);
          if(errString.includes("auth/user-not-found")){
            navigate("/signup", { state: { message: "Email does not exist. Please login." }})
          }
        }
      };

      function handleForgotPassword(){
        sendPasswordResetEmail(auth, email)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Password reset email sent',
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      }

	return (
	<div>
    <div className='flex justify-center items-center min-h-screen flex-col'>
    {message && (
  <p
    className="text-white bg-slate-800 p-4 rounded-md shadow-md mt-4 mb-8"
  >
    {message}
  </p>
)}
      {!isLoggedIn 
        ? 
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-white p-4 mt-4 mb-8 font-bold">Login for existing user</h2>
        <input
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
          className="text-white bg-slate-700 px-4 py-2 rounded-md border border-slate-600 focus:border-slate-500 mb-4"
        />
        <input
          placeholder="Password..."
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="text-white bg-slate-700 px-4 py-2 rounded-md border border-slate-600 focus:border-slate-500 mb-4"
        />
        <button onClick={signIn} className="bg-primary text-white px-4 py-2 rounded-md font-bold shadow-md hover:bg-primary-dark transition duration-300 ease-in-out">Sign In</button>
        <NavLink to="/signup" className="bg-primary text-white px-4 py-2 rounded-md font-bold shadow-md hover:bg-primary-dark transition duration-300 ease-in-out">New User ?</NavLink>
        <button onClick={handleForgotPassword}>Forgot password ?</button>
      </div> : <Navigate to="/board"/>}
    </div>
    </div>
	);
}

export default Login;
