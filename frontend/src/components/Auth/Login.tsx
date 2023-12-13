import React, { useState } from 'react';
import Google from '../../icons/Google';
import Facebook from '../../icons/Facebook';
import Github from '../../icons/Github';
import LoginSignupNavbar from '../navbar/LoginSignupNavbar';

interface LoginProps {
    isOpen: boolean;
    onClose: () => void;
  }

const Login: React.FC<LoginProps> = ({isOpen, onClose}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleEmailBlur = () => {
    if (!validateEmail(username)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordBlur = () => {
    if (!validatePassword(password)) {
      setPasswordError('Password must have at least 8 characters, one uppercase, one number, and one special character.');
    } else {
      setPasswordError('');
    }
  };

  const handleLogin = () => {
    let isValid = true;
    onClose();

    if (!validateEmail(username)) {
      setEmailError('Invalid email address');
      isValid = false;
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must have at least 8 characters, one uppercase, one number, and one special character.');
      isValid = false;
    }

    if (isValid) {
      console.log('Login successful');
    }
  };

  const url1 = '/assests/loginpage1.png';
  const url2 = '/assests/loginpage2.png';
  return (
    <>
    <LoginSignupNavbar />
      <div className=""> 
        <div className="flex flex-col lg:flex-row items-center md:justify-center h-screen" style={{ background: 'linear-gradient(90deg, rgba(77,47,138,1) 0%, rgba(131,26,152,1) 55%, rgba(176,92,194,1) 100%)' }}>
          {/* Info Section  */}
          <div className="w-full lg:w-1/2 p-4 md:pt-32">
            <div className='w-full lg:w-3/4 flex flex-col items-center text-center gap-5'>
            <h1 className="hidden md:block text-white text-2xl md:text-3xl lg:text-5xl font-bold">TaskSphere brings all your tasks, teammates, and tools together</h1>
            <p className="hidden md:block text-white text-lg md:text-xl">Keep everything in the same place, even if your team isn’t.</p>
            <div className='flex flex-wrap justify-center gap-4'>
              <img src={url1} alt="" style={{ width: '300px', height: '250px' }} className='hidden md:block'/>
              <img src={url2} alt=""  style={{ width: '300px', height: '250px' }} className='hidden md:block'/>
            </div>
            </div>
          </div>

          {/* Form Section  */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
              <form className="w-full max-w-lg p-4 bg-transparent md:bg-black md:bg-opacity-50 shadow-md rounded-md">
                  <h1 className="text-white text-2xl mb-4">Login</h1>
                  <h4 className="text-white mb-2">Glad you are back!</h4>

                  {/* user name */}
                  <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                      Username
                    </label>
                    <input
                      className="bg-gray-800 border border-gray-300 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      onBlur={handleEmailBlur}
                    />
                    {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
                  </div>

                  {/* password  */}
                <div className="mb-4">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="bg-gray-800 border border-gray-300 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={handlePasswordBlur}
                  />
                  {passwordError && <p className="text-red-500 text-xs italic">{passwordError}</p>}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className="text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    type="button"
                    onClick={handleLogin}
                    style={{
                        background: '#6644ab',
                        // border: '1px solid #fff',
                      }}
                  >
                    Sign In
                  </button>
                </div>
                <div className="flex items-center justify-center mt-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                    Forgot Password?
                  </label>
                </div>
                <div className="mt-8">
              <div className="flex justify-center items-center">
                <hr className="w-full border-gray-700" />
                <label className="block font-medium text-sm text-gray-200 w-12 text-center">Or</label>
                <hr className="w-full border-gray-700" />
              </div>
              <div className="flex justify-center items-center mt-4">
                <a href="#" className="rounded-full mx-1">
                  <Google />
                </a>
                <a href="#" className="rounded-full mx-1">
                  <Facebook />
                </a>
                <a href="#" className="rounded-full mx-1">
                  <Github />
                </a>
              </div>
            </div>
            <div className="text-center mt-8 text-sm text-gray-200">
              <p>Don't have an account? <a href="#" className="text-purple-300 hover:text-purple-500">Signup</a></p>
              <p className="mt-4">
                <a href="#" className="text-purple-300 hover:text-purple-500">Terms & Conditions</a> | 
                <a href="#" className="text-purple-300 hover:text-purple-500"> Support</a> | 
                <a href="#" className="text-purple-300 hover:text-purple-500"> Customer Care</a>
              </p>
            </div>
              </form>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
