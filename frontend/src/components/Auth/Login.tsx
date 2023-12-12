
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
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setLogin } from "../../store/user/loginSlice";
import { getUserByEmailAsync } from "../../store/user/singleUserAsyncSlice";
import { UserType } from "../type";
import { getUserAsync, setUserSlice } from "../../store/user/userSlice";



function Login() {

    const isLoggedIn: boolean = useSelector((state: RootState) => state.login.value);
    
    

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
      </div> : <Navigate to="/board"/>}
    </div>
    </div>
	);
}

export default Login;
