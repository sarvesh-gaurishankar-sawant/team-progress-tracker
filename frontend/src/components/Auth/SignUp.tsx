import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store/store';
import { setLogin } from '../../store/user/loginSlice';
import { auth, googleProvider } from "../../firebase-config";
import { createUserAsync, getUserByEmailAsync } from '../../store/user/singleUserAsyncSlice';
import { UserType } from '../type';
import { setUserSlice } from '../../store/user/userSlice';

function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const isLoggedIn: boolean = useSelector((state: RootState) => state.login.value);
   
    

    const location = useLocation();
    const message = location.state?.message;

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
          let emptyUserToBeUpdated: UserType = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phoneNo: "",
            boards: []
          }
          let userToBeUpdate: UserType = {...emptyUserToBeUpdated, email:emailId} 
          await dispatch(createUserAsync(userToBeUpdate))
          window.localStorage.setItem('email', emailId)
          await dispatch(getUserByEmailAsync(emailId))
          
          
   
        } catch (err) {  

          navigate("/", { state: { message: "User already exists" } })
        }
      };
    
  return (
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
  <button
    onClick={signUp}
    className="bg-primary text-white px-4 py-2 rounded-md font-bold shadow-md hover:bg-primary-dark transition duration-300 ease-in-out"
  >
    Sign Up
  </button>
</div> : <Navigate to="/board"/>}
    </div>
  )
}

export default SignUp