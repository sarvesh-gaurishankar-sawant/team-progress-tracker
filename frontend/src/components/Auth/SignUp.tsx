import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom';
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
       <h2 className="text-white mt-4 mb-8 font-bold">SignUp for new user</h2>   
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
  <NavLink to="/" className="bg-primary text-white px-4 py-2 rounded-md font-bold shadow-md hover:bg-primary-dark transition duration-300 ease-in-out">Existing User ?</NavLink>
</div> : <Navigate to="/board"/>}
    </div>
  )
}

// // export default SignUp
// import React, { useState } from 'react';
// import LoginSignupNavbar from '../navbar/LoginSignupNavbar';
// import LoginSignupFooter from '../footer/LoginSignupFooter';

// const SignUp: React.FC = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [phone, setPhone] = useState('');

//   const validateEmail = (email: string): boolean => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validatePassword = (password: string): boolean => {
//     const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d).{8,}$/;
//     return passwordRegex.test(password);
//   };

//   const handleEmailBlur = () => {
//     if (!validateEmail(email)) {
//       setEmailError('Invalid email address');
//     } else {
//       setEmailError('');
//     }
//   };

//   const handlePasswordBlur = () => {
//     if (!validatePassword(password)) {
//       setPasswordError('Password must have at least 8 characters, one uppercase, one number, and one special character.');
//     } else {
//       setPasswordError('');
//     }
//   };

//   const handleSignUp = (event: React.FormEvent) => {
//     event.preventDefault();
//     if (!validateEmail(email)) {
//       console.error('Invalid email address');
//       return;
//     }

//     if (!validatePassword(password)) {
//       console.error('Password must have at least 8 characters, one uppercase, one number, and one special character.');
//       return;
//     }

//     console.log('SignUp successful', { firstName, lastName, email, phone, password });
//   };

//   const url1 = '/assests/loginpage1.png';
//   const url2 = '/assests/loginpage2.png';

//   return (
//     <>
//     <LoginSignupNavbar />
//       <div className="flex flex-col lg:flex-row items-center md:justify-center md:h-screen pb-26" style={{ background: 'linear-gradient(90deg, rgba(77,47,138,1) 0%, rgba(131,26,152,1) 55%, rgba(176,92,194,1) 100%)' }}>
//         {/* Info Section */}
//         <div className="w-full lg:w-1/2 p-4">
//           <div className='w-full lg:w-3/4 flex flex-col items-center text-center gap-5'>
//             <h1 className="hidden md:block text-white text-2xl md:text-3xl lg:text-5xl font-bold">TaskSphere brings all your tasks, teammates, and tools together</h1>
//             <p className="hidden md:block text-white text-lg md:text-xl">Keep everything in the same place, even if your team isn’t.</p>
//             <div className='flex flex-wrap justify-center gap-4'>
//               <img src={url1} alt="" style={{ width: '300px', height: '250px' }} className='hidden md:block'/>
//               <img src={url2} alt=""  style={{ width: '300px', height: '250px' }} className='hidden md:block'/>
//             </div>
//           </div>
//         </div>

//         {/* Form Section */}
//         <div className="w-full lg:w-1/2 flex items-center justify-center">
//           <form className="w-full max-w-lg p-4 bg-transparent md:bg-black md:bg-opacity-50 shadow-md rounded-md" onSubmit={handleSignUp}>
//             <h2 className="text-white text-2xl mb-4">Sign Up</h2>
            
//             {/* First Name */}
//             <div className="mb-4">
//               <label className="block text-white text-sm font-bold mb-2" htmlFor="firstname">
//                 First Name
//               </label>
//               <input
//                 className="bg-gray-800 border border-gray-300 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
//                 id="firstname"
//                 type="text"
//                 placeholder="John"
//               />
//             </div>

//             {/* Last Name */}
//             <div className="mb-4">
//               <label className="block text-white text-sm font-bold mb-2" htmlFor="lastname">
//                 Last Name
//               </label>
//               <input
//                 className="bg-gray-800 border border-gray-300 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
//                 id="lastname"
//                 type="text"
//                 placeholder="Doe"
//               />
//             </div>

//             {/* Email */}
//             <div className="mb-4">
//               <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 className="bg-gray-800 border border-gray-300 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 onBlur={handleEmailBlur}
//                 placeholder="johndoe@gmail.com"
//               />
//               {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
//             </div>

//             {/* Password */}
//             <div className="mb-4">
//               <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
//                 Password
//               </label>
//               <input
//                 className="bg-gray-800 border border-gray-300 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 onBlur={handlePasswordBlur}
//                 placeholder="********"
//               />
//               {passwordError && <p className="text-red-500 text-xs italic">{passwordError}</p>}
//             </div>

//             {/* Phone Number */}
//             <div className="mb-4">
//               <label className="block text-white text-sm font-bold mb-2" htmlFor="phno">
//                 Phone No.
//               </label>
//               <input
//                 className="bg-gray-800 border border-gray-300 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
//                 id="phno"
//                 type="tel"
//                 placeholder="000-000-0000"
//               />
//             </div>

//             {/* Sign Up Button */}
//             <button
//               className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="submit"
//             >
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//       <LoginSignupFooter />
//     </>
//   );
// };

export default SignUp;
