import React, { useState } from 'react';
import Google from '../../icons/Google';
import Facebook from '../../icons/Facebook';
import Github from '../../icons/Github';

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
    // linear-gradient(90deg, rgba(102,68,171,1) 0%, rgba(158,74,175,1) 58%, rgba(219,78,179,1) 100%)
    <div className="flex h-screen bg-cover" style={{ background: 'linear-gradient(90deg, rgba(77,47,138,1) 0%, rgba(131,26,152,1) 55%, rgba(176,92,194,1) 100%)' }}>
      <div className="w-[50%] flex items-center justify-center">
        <div className='w-[70%] gap-5 flex flex-col'>
        <div className="text-white text-5xl font-bold">TaskSphere brings all your tasks, teammates, and tools together</div>
        <div className="text-white text-3xl">Keep everything in the same place, even if your team isn’t.</div>
        <div className='flex'>
          <img src={url1} alt="" style={{ width: '300px', height: '250px' }}/>
          <img src={url2} alt=""  style={{ width: '300px', height: '250px' }}/>
        </div>
        </div>
      </div>
      <div className="w-[50%] flex items-center justify-center">
        <div className="w-full max-w-lg">
          <form className="bg-black bg-opacity-50 shadow-md rounded-md px-4 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <h1 className="text-white text-2xl mb-2">Login</h1>
              <h4 className="text-white mb-2">Glad you are back!</h4>
              <div>
                <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  className="bg-black border-white shadow appearance-none border rounded w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onBlur={handleEmailBlur}
                />
                {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="bg-black border-white shadow appearance-none border rounded w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
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
        </div>
      </div>
    </div>
  );
};

export default Login;
